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

  applyFilters();
});

