// Simple client-side search using MiniSearch (https://lucaong.github.io/minisearch/)
// This script builds a small index for the scaffolded pages and provides a lightweight overlay UI.

(function(){
  if (typeof MiniSearch === 'undefined') {
    console.warn('MiniSearch not loaded. Make sure the CDN script is included.');
    return;
  }

  const docs = [
    { id: 1, title: 'Home', text: 'Course overview and links to weeks, projects, topics and help.', url: '/index.html' },
    { id: 2, title: 'Weeks', text: 'Weekly schedule and class topics by week.', url: '/weeks/index.html' },
    { id: 3, title: 'Week 9: Project 3 Start', text: 'Week 9 Project 3 introduction and kickoff.', url: '/weeks/week-9.html' },
    { id: 4, title: 'Week 11: Wireframes to HTML and Media Queries', text: 'Week 11 wireframes HTML media queries responsive design.', url: '/weeks/week-11.html' },
    { id: 5, title: 'Week 12: Finishing Project 3', text: 'Week 12 finishing project 3: Markdown conversion, landmark pages, navigation', url: '/weeks/week-12.html' },
    { id: 6, title: 'Week 13: Project 3 finish and Project 4 planning', text: 'Week 13 updates Project 3 finish and Project 4 planning brainstorming.', url: '/weeks/week-13.html' },
    { id: 7, title: 'Week 14: Project 4 Creative Brief', text: 'Week 14 Project 4 creative brief and planning.', url: '/weeks/week-14.html' },
    { id: 8, title: 'Projects', text: 'Project descriptions and submission information.', url: '/projects/index.html' },
    { id: 9, title: 'Project 2', text: 'Project 2 assignment details requirements submission.', url: '/projects/project-2.html' },
    { id: 10, title: 'Project 3', text: 'Project 3 assignment details requirements submission.', url: '/projects/project-3.html' },
    { id: 11, title: 'Topics', text: 'Course topics, references, and reading materials.', url: '/topics/index.html' },
    { id: 12, title: 'Branching in Git and GitHub', text: 'Guided walkthrough of branching workflows in Git and GitHub version control collaboration.', url: '/topics/branching.html' },
    { id: 13, title: 'Example: Combining AI and Branching', text: 'Branching example that combines Git workflows with GitHub Copilot assistance AI.', url: '/topics/branching-ai.html' },
    { id: 14, title: 'Copilot Setup to use AI in VS Code', text: 'Step-by-step Copilot setup guidance for MMP 240 students AI GitHub.', url: '/topics/copilot-setup.html' },
    { id: 15, title: 'Introduction to Responsive Web Design', text: 'Overview of responsive web design principles RWD mobile viewport media queries.', url: '/topics/rwd-intro.html' },
    { id: 16, title: 'Responsive Web Design Resources', text: 'Curated responsive web design resources RWD references links.', url: '/topics/rwd-resources.html' },
    { id: 17, title: 'Netlify', text: 'Overview of using Netlify to deploy and host MMP 240 projects deployment hosting.', url: '/topics/netlify.html' },
    { id: 18, title: 'Help', text: 'Help, resources and contact info for the course.', url: '/help/index.html' },
    { id: 19, title: 'Clamp: Fluid Font Scaling', text: 'Using clamp() for fluid typography and a pixel→rem reference table.', url: '/topics/clamp.html' },
    { id: 20, title: 'CSS Variables', text: 'Reference and how to use CSS variables for spacing, typography, and site-wide consistency.', url: '/topics/css-variables.html' },
    { id: 21, title: 'Font Service', text: 'Guidance on using web font services for efficient font loading and best practices.', url: '/topics/font-service.html' },
    { id: 22, title: 'CSS', text: 'CSS reference and patterns, including clamp() and custom properties.', url: '/topics/css.html' },
    { id: 23, title: 'Box Sizing', text: 'Explains differences between content-box and border-box and their effects on layout.', url: '/topics/box-sizing.html' },
    { id: 24, title: 'Positioning', text: 'Walks through position: sticky, position: fixed, and position: absolute with examples.', url: '/topics/position.html' },
    { id: 25, title: 'Site Visualizations', text: 'Planning techniques, wireframe examples, and visual tools for designing content-first pages.', url: '/topics/site-visualizations.html' },
    { id: 26, title: 'Free Resources', text: 'Curated list of free images, icons, fonts, and media resources with licensing notes.', url: '/topics/free-resources.html' },
    { id: 27, title: 'Accordion Component', text: 'How to build accessible accordions with semantic HTML, minimal CSS, and progressive enhancement.', url: '/topics/accordion.html' },
    { id: 28, title: 'Components', text: 'Component patterns and examples used in class.', url: '/topics/components.html' },
    { id: 29, title: 'Project 4 Review (AI-assisted)', text: 'Notes and suggestions on using Copilot to review Project 4.', url: '/topics/project-4-review.html' },
    { id: 30, title: 'HTML', text: 'Short guides covering semantic HTML, forms, and accessibility-friendly markup.', url: '/topics/html.html' },
    { id: 31, title: 'Design + Planning', text: 'Design and planning resources, wireframes, and visualization techniques.', url: '/topics/design.html' },
    { id: 32, title: 'Using Copilot', text: 'Practical examples of using Copilot to speed up HTML/CSS tasks and how to validate suggestions.', url: '/topics/using-copilot.html' },
    { id: 33, title: 'RWD Layout', text: 'Responsive layout patterns and guiding principles used in class.', url: '/topics/rwd-layout.html' },
    { id: 34, title: 'Project 4', text: 'Project 4 assignment details, requirements, and submission instructions.', url: '/projects/project-4.html' },
    { id: 35, title: 'Week 15', text: 'Week 15 materials and assignments.', url: '/weeks/week-15.html' },
    { id: 36, title: 'Week 16', text: 'Week 16 materials and assignments.', url: '/weeks/week-16.html' }
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
