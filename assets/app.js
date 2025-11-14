document.addEventListener('DOMContentLoaded', () => {
  const termGrid = document.getElementById('term-grid');
  const searchInput = document.getElementById('search-input');
  const categoryButtons = Array.from(document.querySelectorAll('.category-chip'));
  const viewButtons = Array.from(document.querySelectorAll('.toggle-btn'));
  const visibleCountEl = document.getElementById('visible-count');
  const maxCountEl = document.getElementById('max-count');
  const noResultEl = document.getElementById('no-result');

  if (!termGrid) return;

  const cards = Array.from(termGrid.querySelectorAll('.term-card'));
  maxCountEl && (maxCountEl.textContent = String(cards.length));

  let currentCategory = 'all';
  let currentKeyword = '';

  function normalize(s) {
    return (s || '').toLowerCase();
  }

  function applyFilters() {
    const kw = normalize(currentKeyword);
    let visible = 0;
    cards.forEach(card => {
      const cat = card.getAttribute('data-category') || 'all';
      const text = (
        card.textContent + ' ' + (card.getAttribute('data-keywords') || '')
      ).toLowerCase();
      const catOk = currentCategory === 'all' || cat === currentCategory;
      const kwOk = !kw || text.includes(kw);
      const show = catOk && kwOk;
      card.style.display = show ? '' : 'none';
      if (show) visible += 1;
    });
    visibleCountEl && (visibleCountEl.textContent = String(visible));
    if (noResultEl) noResultEl.classList.toggle('show', visible === 0);
  }

  // 分类点击
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      applyFilters();
    });
  });

  // 搜索输入
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentKeyword = e.target.value.trim();
      applyFilters();
    });
    window.addEventListener('keydown', e => {
      const ae = document.activeElement;
      const isInput = ae === searchInput || (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA'));
      if (e.key === '/' && !isInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });
  }

  // 视图切换
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      if (view === 'compact') {
        termGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
      } else {
        termGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(230px, 1fr))';
      }
    });
  });

  // Modal 功能
  const modal = document.getElementById('term-modal');
  const modalBody = document.getElementById('term-modal-body');
  const modalClose = document.querySelector('.term-modal-close');
  const modalOverlay = document.querySelector('.term-modal-overlay');
  let giscusScript = null;

  function closeModal() {
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      // 更新 URL 到首页（保持 baseurl）
      const currentPath = window.location.pathname;
      const pathParts = currentPath.split('/').filter(p => p);
      // 如果路径包含 /ai-wiki，保留它；否则回到根目录
      const baseurl = pathParts[0] === 'ai-wiki' ? '/ai-wiki' : '';
      const homePath = baseurl + '/';
      if (currentPath !== homePath && currentPath !== baseurl) {
        window.history.pushState({}, '', homePath);
      }
      // 清理 giscus
      if (giscusScript && giscusScript.parentNode) {
        giscusScript.parentNode.removeChild(giscusScript);
        giscusScript = null;
      }
      const giscusContainer = document.getElementById('giscus-container');
      if (giscusContainer) {
        giscusContainer.innerHTML = '';
      }
    }
  }

  function openModal(url) {
    if (!modal || !modalBody) return;
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    modalBody.innerHTML = '<div class="term-modal-loading">加载中...</div>';
    
    // 更新 URL（保持 SEO 友好）
    window.history.pushState({ modal: true, url: url }, '', url);

    // 加载内容
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const termDetail = doc.querySelector('.term-detail');
        
        if (termDetail) {
          modalBody.innerHTML = termDetail.outerHTML;
          
          // 加载 giscus 评论
          const giscusContainer = modalBody.querySelector('#giscus-container');
          if (giscusContainer) {
            giscusScript = document.createElement('script');
            giscusScript.src = 'https://giscus.app/client.js';
            giscusScript.setAttribute('data-repo', 'onewesong/ai-wiki');
            giscusScript.setAttribute('data-repo-id', 'R_kgDOQVaIew');
            giscusScript.setAttribute('data-category', 'Show and tell');
            giscusScript.setAttribute('data-category-id', 'DIC_kwDOQVaIe84Cxxql');
            giscusScript.setAttribute('data-mapping', 'pathname');
            giscusScript.setAttribute('data-strict', '0');
            giscusScript.setAttribute('data-reactions-enabled', '1');
            giscusScript.setAttribute('data-emit-metadata', '0');
            giscusScript.setAttribute('data-input-position', 'bottom');
            giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
            giscusScript.setAttribute('data-lang', 'zh-CN');
            giscusScript.crossOrigin = 'anonymous';
            giscusScript.async = true;
            giscusContainer.appendChild(giscusScript);
          }
        } else {
          modalBody.innerHTML = '<div class="term-modal-loading">加载失败，请刷新页面重试</div>';
        }
      })
      .catch(error => {
        console.error('加载失败:', error);
        modalBody.innerHTML = '<div class="term-modal-loading">加载失败，请刷新页面重试</div>';
      });
  }

  // 拦截卡片点击
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const url = card.getAttribute('href');
      if (url) {
        openModal(url);
      }
    });
  });

  // 关闭按钮
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // 点击外部关闭
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // ESC 键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
      closeModal();
    }
  });

  // 处理浏览器前进/后退
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.modal && e.state.url) {
      openModal(e.state.url);
    } else {
      closeModal();
    }
  });

  applyFilters();
});

