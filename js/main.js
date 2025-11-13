// Accessible mobile navigation toggle
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  // For small screens start hidden
  function setInitial() {
    if (window.matchMedia('(max-width: 765px)').matches) {
      nav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      nav.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }
  }
  setInitial();
  window.addEventListener('resize', setInitial);

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.hidden = isExpanded;
  });
})();
