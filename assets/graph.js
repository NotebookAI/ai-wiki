document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('graph-container');
  if (!container) return;

  const graphUrl = container.dataset.graphUrl;
  const canvas = document.getElementById('graph-canvas');
  const tooltip = document.getElementById('graph-tooltip');
  const loadingEl = document.getElementById('graph-loading');
  const searchInput = document.getElementById('graph-search-input');
  const categoryButtons = Array.from(document.querySelectorAll('#graph-category-list .category-chip'));
  const nodeCountEl = document.getElementById('graph-node-count');
  const edgeCountEl = document.getElementById('graph-edge-count');
  const totalCountEl = document.getElementById('graph-total-count');
  const resetButtons = Array.from(document.querySelectorAll('.js-graph-reset'));
  const fullscreenButtons = Array.from(document.querySelectorAll('.js-graph-fullscreen'));
  const zoomInButtons = Array.from(document.querySelectorAll('.js-graph-zoom-in'));
  const zoomOutButtons = Array.from(document.querySelectorAll('.js-graph-zoom-out'));
  const toggleLabels = document.getElementById('graph-toggle-labels');
  const toggleCategories = document.getElementById('graph-toggle-categories');
  const toggleCategoryEdges = document.getElementById('graph-toggle-cat-edges');

  if (!canvas || !graphUrl) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const TYPE_COLORS = {
    core: '#22c55e',
    model: '#3b82f6',
    tool: '#f97316',
    concept: '#eab308',
    method: '#a855f7',
    practice: '#0ea5e9'
  };

  const CATEGORY_LABELS = {
    foundation: '基础概念',
    model: '模型能力',
    training: '训练微调',
    inference: '推理部署',
    rag: 'RAG 检索',
    multimodal: '多模态',
    framework: '框架生态',
    safety: '安全对齐',
    product: '产品应用',
    modelsuite: '模型家族'
  };

  const state = {
    nodes: [],
    edges: [],
    nodeById: new Map(),
    edgesRef: [],
    edgesCategory: [],
    highlightCategory: 'all',
    showLabels: true,
    showCategories: true,
    showCategoryEdges: true,
    draggingNode: null,
    panning: false,
    panStart: { x: 0, y: 0, ox: 0, oy: 0 },
    transform: { scale: 1, ox: 0, oy: 0 },
    alpha: 1
  };

  function getCssVar(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (v || '').trim() || fallback;
  }

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!state.transform.ox && !state.transform.oy) {
      state.transform.ox = rect.width / 2;
      state.transform.oy = rect.height / 2;
    }
  }

  function worldToScreen(x, y) {
    return {
      x: x * state.transform.scale + state.transform.ox,
      y: y * state.transform.scale + state.transform.oy
    };
  }

  function screenToWorld(x, y) {
    return {
      x: (x - state.transform.ox) / state.transform.scale,
      y: (y - state.transform.oy) / state.transform.scale
    };
  }

  function nodeRadius(node) {
    if (node.kind === 'category') return 10;
    const base = 6;
    const extra = Math.min(4, Math.floor((node.degree || 0) / 6));
    return base + extra;
  }

  function nodeColor(node) {
    if (node.kind === 'category') return getCssVar('--text-soft', '#94a3b8');
    return TYPE_COLORS[node.type] || getCssVar('--text-muted', '#9ca3af');
  }

  function nodeLabel(node) {
    if (node.kind === 'category') return node.label;
    return node.title || node.id;
  }

  function pickNodeAt(screenX, screenY) {
    const hitPad = 4;
    for (let i = state.nodes.length - 1; i >= 0; i--) {
      const n = state.nodes[i];
      if (!n.visible) continue;
      const p = worldToScreen(n.x, n.y);
      const r = nodeRadius(n) * state.transform.scale + hitPad;
      const dx = screenX - p.x;
      const dy = screenY - p.y;
      if (dx * dx + dy * dy <= r * r) return n;
    }
    return null;
  }

  function setTooltip(node, screenX, screenY) {
    if (!tooltip) return;
    if (!node) {
      tooltip.style.display = 'none';
      tooltip.setAttribute('aria-hidden', 'true');
      return;
    }
    const lines = [];
    if (node.kind === 'category') {
      lines.push(`<div class="t-title">${escapeHtml(node.label)}</div>`);
      lines.push(`<div class="t-sub">分类节点</div>`);
    } else {
      lines.push(`<div class="t-title">${escapeHtml(node.title || node.id)}</div>`);
      if (node.title_en) lines.push(`<div class="t-sub">${escapeHtml(node.title_en)}</div>`);
      const catText = node.category ? (CATEGORY_LABELS[node.category] ? `${CATEGORY_LABELS[node.category]}（${node.category}）` : node.category) : '-';
      lines.push(`<div class="t-meta">分类：${escapeHtml(catText)} · 类型：${escapeHtml(node.type || '-')}</div>`);
    }
    tooltip.innerHTML = lines.join('');
    tooltip.style.display = 'block';
    tooltip.setAttribute('aria-hidden', 'false');
    tooltip.style.left = `${Math.round(screenX + 12)}px`;
    tooltip.style.top = `${Math.round(screenY + 12)}px`;
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, (c) => {
      switch (c) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return c;
      }
    });
  }

  function rebuildVisibility() {
    const showCategories = !!state.showCategories;
    state.nodes.forEach(n => {
      if (n.kind === 'category') {
        n.visible = showCategories;
        return;
      }
      n.visible = true;
    });
  }

  function rebuildEdges() {
    const edges = [];
    if (state.edgesRef.length) edges.push(...state.edgesRef);
    if (state.showCategoryEdges && state.edgesCategory.length) edges.push(...state.edgesCategory);
    state.edges = edges;
  }

  function applyCategoryHighlight(cat) {
    state.highlightCategory = cat || 'all';
    categoryButtons.forEach(btn => {
      const c = btn.getAttribute('data-category') || 'all';
      btn.classList.toggle('active', c === state.highlightCategory);
    });
  }

  function resetView() {
    const rect = container.getBoundingClientRect();
    state.transform.scale = 1;
    state.transform.ox = rect.width / 2;
    state.transform.oy = rect.height / 2;
    state.alpha = 1;
  }

  function isFullscreenActive() {
    return document.fullscreenElement === container;
  }

  function setFullscreenButtons(active, supported) {
    fullscreenButtons.forEach(btn => {
      if (!btn) return;
      if (supported === false) {
        btn.setAttribute('title', '当前浏览器不支持原生全屏，已使用页面全屏模式');
      } else {
        btn.removeAttribute('title');
      }
      btn.setAttribute('aria-label', active ? '退出全屏' : '全屏');
      btn.setAttribute('title', active ? '退出全屏' : '全屏');

      const enterIcon = btn.querySelector('.icon-fs-enter');
      const exitIcon = btn.querySelector('.icon-fs-exit');
      if (enterIcon) enterIcon.style.display = active ? 'none' : 'block';
      if (exitIcon) exitIcon.style.display = active ? 'block' : 'none';
    });
  }

  function setFallbackFullscreen(active) {
    document.body.classList.toggle('graph-fs', !!active);
    setFullscreenButtons(!!active, false);
    resizeCanvas();
    state.alpha = 1;
  }

  async function toggleFullscreen() {
    const active = isFullscreenActive();
    if (active) {
      try {
        await document.exitFullscreen();
      } catch (err) {
        setFallbackFullscreen(false);
      }
      return;
    }

    if (container.requestFullscreen && document.fullscreenEnabled) {
      try {
        await container.requestFullscreen();
        return;
      } catch (err) {
        setFallbackFullscreen(true);
        return;
      }
    }

    setFallbackFullscreen(true);
  }

  function zoomAt(screenX, screenY, factor) {
    const rect = container.getBoundingClientRect();
    const x = typeof screenX === 'number' ? screenX : rect.width / 2;
    const y = typeof screenY === 'number' ? screenY : rect.height / 2;
    const before = screenToWorld(x, y);
    state.transform.scale = Math.max(0.2, Math.min(3.5, state.transform.scale * factor));
    const after = worldToScreen(before.x, before.y);
    state.transform.ox += x - after.x;
    state.transform.oy += y - after.y;
    state.alpha = 1;
  }

  function focusNode(node) {
    if (!node) return;
    const rect = container.getBoundingClientRect();
    state.transform.ox = rect.width / 2 - node.x * state.transform.scale;
    state.transform.oy = rect.height / 2 - node.y * state.transform.scale;
    state.alpha = 1;
  }

  function draw() {
    const rect = container.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const gridBg = getCssVar('--main-bg', 'rgba(15,23,42,0.96)');
    ctx.fillStyle = gridBg;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const edgeColor = document.body.classList.contains('light-theme') ? 'rgba(148,163,184,0.45)' : 'rgba(148,163,184,0.25)';
    const edgeColorRef = document.body.classList.contains('light-theme') ? 'rgba(34,197,94,0.25)' : 'rgba(34,197,94,0.18)';

    function strokeEdges(kind, color) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.beginPath();
      for (const e of state.edges) {
        if (e.kind !== kind) continue;
        if (!e.source.visible || !e.target.visible) continue;
        const a = worldToScreen(e.source.x, e.source.y);
        const b = worldToScreen(e.target.x, e.target.y);
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
      }
      ctx.stroke();
    }

    if (state.showCategoryEdges) strokeEdges('category', edgeColor);
    strokeEdges('ref', edgeColorRef);

    for (const n of state.nodes) {
      if (!n.visible) continue;
      const isDim = state.highlightCategory !== 'all' && n.kind === 'term' && n.category !== state.highlightCategory;
      const p = worldToScreen(n.x, n.y);
      const r = nodeRadius(n);

      ctx.globalAlpha = isDim ? 0.25 : 1;
      ctx.beginPath();
      ctx.fillStyle = nodeColor(n);
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 1;
      ctx.strokeStyle = document.body.classList.contains('light-theme') ? 'rgba(15,23,42,0.25)' : 'rgba(0,0,0,0.35)';
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    const showLabels = !!state.showLabels && state.transform.scale >= 0.75;
    if (showLabels) {
      ctx.font = '11px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = getCssVar('--text-main', '#e5e7eb');
      for (const n of state.nodes) {
        if (!n.visible) continue;
        if (n.kind === 'term' && state.highlightCategory !== 'all' && n.category !== state.highlightCategory) continue;
        const p = worldToScreen(n.x, n.y);
        ctx.fillText(nodeLabel(n), p.x + nodeRadius(n) + 6, p.y);
      }
    }
  }

  function stepSimulation() {
    const repulsion = 1200;
    const repulsionMaxDist = 220;
    const repulsionMaxDist2 = repulsionMaxDist * repulsionMaxDist;
    const centerPull = 0.0008;
    const damping = 0.86;
    const timeStep = 1;

    const nodes = state.nodes.filter(n => n.visible);
    const edges = state.edges.filter(e => e.source.visible && e.target.visible);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist2 = dx * dx + dy * dy + 0.01;
        if (dist2 > repulsionMaxDist2) continue;
        const f = repulsion / dist2;
        const invDist = 1 / Math.sqrt(dist2);
        const fx = f * dx * invDist;
        const fy = f * dy * invDist;
        if (!a.fixed) { a.vx -= fx; a.vy -= fy; }
        if (!b.fixed) { b.vx += fx; b.vy += fy; }
      }
    }

    for (const e of edges) {
      const a = e.source;
      const b = e.target;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const desired = e.length;
      const k = e.strength;
      const f = (dist - desired) * k;
      const fx = (dx / dist) * f;
      const fy = (dy / dist) * f;
      if (!a.fixed) { a.vx += fx; a.vy += fy; }
      if (!b.fixed) { b.vx -= fx; b.vy -= fy; }
    }

    for (const n of nodes) {
      if (n.fixed) {
        n.vx = 0;
        n.vy = 0;
        continue;
      }
      n.vx += (-n.x) * centerPull;
      n.vy += (-n.y) * centerPull;
      n.vx *= damping;
      n.vy *= damping;
      n.x += n.vx * timeStep;
      n.y += n.vy * timeStep;
    }
  }

  function loop() {
    if (state.alpha > 0.02) {
      for (let i = 0; i < 2; i++) stepSimulation();
      state.alpha *= 0.985;
    }
    draw();
    requestAnimationFrame(loop);
  }

  function buildGraph(payload) {
    const terms = (payload && payload.terms) ? payload.terms : [];
    const termNodes = terms.map((t) => ({
      kind: 'term',
      id: t.id,
      title: t.title,
      title_en: t.title_en,
      brief: t.brief,
      category: t.category,
      type: t.type,
      url: t.url,
      text: t.text || '',
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 420,
      vx: 0,
      vy: 0,
      fixed: false,
      visible: true,
      degree: 0
    }));

    const categorySet = new Set();
    for (const t of termNodes) {
      if (t.category) categorySet.add(t.category);
    }

    const categoryNodes = Array.from(categorySet).sort().map((cat) => ({
      kind: 'category',
      id: `@cat:${cat}`,
      label: CATEGORY_LABELS[cat] ? `${CATEGORY_LABELS[cat]}（${cat}）` : cat,
      category: cat,
      x: (Math.random() - 0.5) * 260,
      y: (Math.random() - 0.5) * 180,
      vx: 0,
      vy: 0,
      fixed: false,
      visible: true,
      degree: 0
    }));

    state.nodes = [...categoryNodes, ...termNodes];
    state.nodeById = new Map();
    state.nodes.forEach(n => state.nodeById.set(n.id, n));

    const termIdSet = new Set(termNodes.map(n => n.id));
    const edgeKey = new Set();

    const refEdges = [];
    const termLinkRe = /\/terms\/([a-z0-9-]+)\//g;
    for (const src of termNodes) {
      const text = String(src.text || '');
      let m;
      while ((m = termLinkRe.exec(text)) !== null) {
        const targetId = m[1];
        if (!termIdSet.has(targetId)) continue;
        if (targetId === src.id) continue;
        const key = `${src.id}=>${targetId}`;
        if (edgeKey.has(key)) continue;
        edgeKey.add(key);
        const dst = state.nodeById.get(targetId);
        if (!dst) continue;
        refEdges.push({
          kind: 'ref',
          source: src,
          target: dst,
          length: 90,
          strength: 0.02
        });
        src.degree += 1;
        dst.degree += 1;
      }
    }

    const catEdges = [];
    for (const t of termNodes) {
      const catNode = state.nodeById.get(`@cat:${t.category}`);
      if (!catNode) continue;
      catEdges.push({
        kind: 'category',
        source: t,
        target: catNode,
        length: 150,
        strength: 0.01
      });
      t.degree += 1;
      catNode.degree += 1;
    }

    state.edgesRef = refEdges;
    state.edgesCategory = catEdges;
    rebuildVisibility();
    rebuildEdges();

    totalCountEl && (totalCountEl.textContent = String(termNodes.length));
    nodeCountEl && (nodeCountEl.textContent = String(state.nodes.length));
    edgeCountEl && (edgeCountEl.textContent = String(state.edges.length));
  }

  function openTerm(node) {
    const url = node && node.url;
    if (!url) return;
    const api = window.AIWiki || {};
    if (typeof api.openModal === 'function') {
      api.openModal(url);
      return;
    }
    window.location.href = url;
  }

  function initInteractions() {
    resizeCanvas();
    resetView();

    window.addEventListener('resize', () => {
      resizeCanvas();
      state.alpha = 1;
    });

    document.addEventListener('fullscreenchange', () => {
      const on = isFullscreenActive();
      setFullscreenButtons(on, true);
      resizeCanvas();
      state.alpha = 1;
    });

    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      zoomAt(mx, my, e.deltaY < 0 ? 1.12 : 1 / 1.12);
    }, { passive: false });

    container.addEventListener('mousedown', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const hit = pickNodeAt(x, y);
      if (hit) {
        state.draggingNode = hit;
        hit.fixed = true;
        const w = screenToWorld(x, y);
        hit.x = w.x;
        hit.y = w.y;
      } else {
        state.panning = true;
        state.panStart.x = x;
        state.panStart.y = y;
        state.panStart.ox = state.transform.ox;
        state.panStart.oy = state.transform.oy;
      }
      state.alpha = 1;
    });

    window.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        setTooltip(null);
        return;
      }

      if (state.draggingNode) {
        const w = screenToWorld(x, y);
        state.draggingNode.x = w.x;
        state.draggingNode.y = w.y;
        state.alpha = 1;
        setTooltip(state.draggingNode, x, y);
        return;
      }
      if (state.panning) {
        state.transform.ox = state.panStart.ox + (x - state.panStart.x);
        state.transform.oy = state.panStart.oy + (y - state.panStart.y);
        state.alpha = 1;
        setTooltip(null);
        return;
      }

      const hit = pickNodeAt(x, y);
      setTooltip(hit, x, y);
      canvas.style.cursor = hit ? 'pointer' : 'grab';
    });

    window.addEventListener('mouseup', (e) => {
      if (state.draggingNode) {
        state.draggingNode.fixed = false;
        state.draggingNode = null;
      }
      state.panning = false;
    });

    container.addEventListener('click', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const hit = pickNodeAt(x, y);
      if (!hit) return;
      if (hit.kind === 'category') {
        applyCategoryHighlight(hit.category || 'all');
        focusNode(hit);
        return;
      }
      openTerm(hit);
    });

    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const c = btn.getAttribute('data-category') || 'all';
        applyCategoryHighlight(c);
        state.alpha = 1;
      });
    });

    if (toggleLabels) {
      toggleLabels.addEventListener('change', () => {
        state.showLabels = toggleLabels.checked;
        state.alpha = 1;
      });
    }

    if (toggleCategories) {
      toggleCategories.addEventListener('change', () => {
        state.showCategories = toggleCategories.checked;
        rebuildVisibility();
        rebuildEdges();
        nodeCountEl && (nodeCountEl.textContent = String(state.nodes.filter(n => n.visible).length));
        edgeCountEl && (edgeCountEl.textContent = String(state.edges.length));
        state.alpha = 1;
      });
    }

    if (toggleCategoryEdges) {
      toggleCategoryEdges.addEventListener('change', () => {
        state.showCategoryEdges = toggleCategoryEdges.checked;
        rebuildEdges();
        edgeCountEl && (edgeCountEl.textContent = String(state.edges.length));
        state.alpha = 1;
      });
    }

    resetButtons.forEach(btn => btn && btn.addEventListener('click', resetView));
    fullscreenButtons.forEach(btn => btn && btn.addEventListener('click', toggleFullscreen));
    zoomInButtons.forEach(btn => btn && btn.addEventListener('click', () => zoomAt(null, null, 1.18)));
    zoomOutButtons.forEach(btn => btn && btn.addEventListener('click', () => zoomAt(null, null, 1 / 1.18)));
    setFullscreenButtons(isFullscreenActive() || document.body.classList.contains('graph-fs'), true);

    if (searchInput) {
      const doSearch = () => {
        const q = String(searchInput.value || '').trim().toLowerCase();
        if (!q) return;
        const terms = state.nodes.filter(n => n.kind === 'term');
        const best = terms.find(n => n.id === q)
          || terms.find(n => (n.title || '').toLowerCase() === q)
          || terms.find(n => (n.title_en || '').toLowerCase() === q)
          || terms.find(n => ((n.title || '') + ' ' + (n.title_en || '')).toLowerCase().includes(q))
          || terms.find(n => String(n.text || '').toLowerCase().includes(q));
        if (best) {
          focusNode(best);
          setTooltip(best, 24, 24);
        }
      };

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch();
      });

      window.addEventListener('keydown', (e) => {
        const ae = document.activeElement;
        const isInput = ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA');
        if (e.key === '/' && !isInput) {
          e.preventDefault();
          searchInput.focus();
          searchInput.select();
        }
      });
    }
  }

  fetch(graphUrl)
    .then(r => r.json())
    .then(data => {
      buildGraph(data);
      initInteractions();
      loadingEl && (loadingEl.style.display = 'none');
      state.alpha = 1;
      requestAnimationFrame(loop);
    })
    .catch(err => {
      console.error('加载图谱失败:', err);
      if (loadingEl) loadingEl.textContent = '加载图谱失败，请刷新重试';
    });
});
