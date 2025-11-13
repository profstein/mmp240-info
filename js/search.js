// Simple client-side search using MiniSearch (https://lucaong.github.io/minisearch/)
// This script builds a small index for the scaffolded pages and provides a lightweight overlay UI.

(function(){
  if (typeof MiniSearch === 'undefined') {
    console.warn('MiniSearch not loaded. Make sure the CDN script is included.');
    return;
  }

  const docs = [
    { id: 1, title: 'Home', text: 'Course overview and links to weeks, projects, topics and help.', url: 'index.html' },
    { id: 2, title: 'Weeks', text: 'Weekly schedule and class topics by week.', url: 'weeks/index.html' },
    { id: 3, title: 'Projects', text: 'Project descriptions and submission information.', url: 'projects/index.html' },
    { id: 4, title: 'Topics', text: 'Course topics, references, and reading materials.', url: 'topics/index.html' },
    { id: 5, title: 'Help', text: 'Help, resources and contact info for the course.', url: 'help/index.html' }
  ];

  // Create MiniSearch instance
  const miniSearch = new MiniSearch({
    fields: ['title', 'text'], // fields to index for full-text search
    storeFields: ['title', 'url'] // fields to return with search results
  });

  miniSearch.addAll(docs);

  // Build overlay UI
  function createOverlay(){
    if (document.getElementById('search-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'search-overlay';
    overlay.className = 'search-overlay';
    overlay.innerHTML = `
      <div class="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-label">
        <div class="search-row">
          <label id="search-label" class="visually-hidden">Search site</label>
          <input id="search-input" class="search-input" type="search" placeholder="Search the course..." aria-label="Search the site">
          <button id="search-close" class="search-close" aria-label="Close search">✕</button>
        </div>
        <div id="search-results" class="search-results" aria-live="polite"></div>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = overlay.querySelector('#search-input');
    const close = overlay.querySelector('#search-close');
    const results = overlay.querySelector('#search-results');

    // Close handlers
    function closeOverlay(){
      overlay.classList.remove('open');
      input.value = '';
      results.innerHTML = '';
      document.body.classList.remove('search-open');
    }
    close.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e)=>{
      if (e.target === overlay) closeOverlay();
    });

    // keyboard
    overlay.addEventListener('keydown', (e)=>{
      if (e.key === 'Escape') closeOverlay();
    });

    // render results
    function renderResults(items){
      if (!items || items.length === 0){
        results.innerHTML = '<p class="search-empty">No results</p>';
        return;
      }
      results.innerHTML = items.map(it => {
        // ensure link goes to site root (root-relative)
        let target = it.url || '';
        // normalize: if url does not start with '/', make it root-relative
        if (target && !target.startsWith('/')) target = '/' + target;
        // fallback: if nothing available try to resolve via docs array
        if (!target || target === '/'){
          const d = docs.find(d => d.id === it.id || d.title === it.title || d.url === it.url || ('/' + d.url) === it.url || d.url === ('/' + it.url));
          if (d) target = d.url.startsWith('/') ? d.url : '/' + d.url;
        }
        return `<a class="search-item" href="${target}"><strong>${it.title}</strong><span class="search-snippet">${escapeHtml(getSnippet(it))}</span></a>`;
      }).join('');
    }

    function getSnippet(item){
      // Find doc text for snippet
      const doc = docs.find(d => d.id === item.id || d.title === item.title || d.url === item.url);
      if (!doc) return '';
      return doc.text;
    }

    // Simple escape
    function escapeHtml(s){
      return String(s).replace(/[&<>\"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
    }

    // debounce
    function debounce(fn, wait=180){
      let t;
      return function(...args){
        clearTimeout(t);
        t = setTimeout(()=>fn.apply(this,args), wait);
      }
    }

    const doSearch = debounce(function(q){
      const trimmed = (q || '').trim();
      if (!trimmed){
        results.innerHTML = '';
        return;
      }
      const res = miniSearch.search(trimmed, {prefix: true});
      renderResults(res);
    }, 150);

    input.addEventListener('input', (e)=> doSearch(e.target.value));

    // focus input when overlay opens
    overlay.open = function(){
      overlay.classList.add('open');
      document.body.classList.add('search-open');
      setTimeout(()=> input.focus(), 50);
    };
  }

  // hook up header search buttons
  function initButtons(){
    const buttons = document.querySelectorAll('.search-button');
    if (!buttons || buttons.length===0) return;

    createOverlay();
    const overlay = document.getElementById('search-overlay');
    const input = overlay.querySelector('#search-input');

    buttons.forEach(btn => {
      btn.addEventListener('click', ()=>{
        overlay.open();
        input.focus();
      });
    });
  }

  // initialize when DOM ready
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initButtons);
  } else {
    initButtons();
  }

})();
