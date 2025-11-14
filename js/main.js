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

  // ---------------- Submenu toggles (accessible) ----------------
  // Add a toggle button for any nav item that contains a submenu (UL).
  const navItems = nav.querySelectorAll('li');
  navItems.forEach((li, index) => {
    const submenu = li.querySelector('ul');
    if (!submenu) return;

    // Give submenu an id for aria-controls
    if (!submenu.id) submenu.id = `submenu-${index}`;

    // Prepare the existing first link (if present)
    const firstLink = li.querySelector('a');
    const labelText = firstLink ? firstLink.textContent.trim() : 'Menu';
    const labelHref = firstLink ? firstLink.getAttribute('href') : null;

    // Replace the top-level link with a button that contains the label and caret
    const labelBtn = document.createElement('button');
    labelBtn.type = 'button';
    labelBtn.className = 'subnav-label';
    labelBtn.setAttribute('aria-expanded', 'false');
    labelBtn.setAttribute('aria-controls', submenu.id);
    labelBtn.innerHTML = `<span class="label-text">${labelText}</span><span class="subnav-caret" aria-hidden="true">▾</span>`;

    if (firstLink && firstLink.parentNode === li) {
      li.replaceChild(labelBtn, firstLink);
    } else {
      li.insertAdjacentElement('afterbegin', labelBtn);
    }

    // If the top-level was a link, add a first item in the submenu that links to the original href
    if (labelHref) {
      const firstSubLink = document.createElement('a');
      firstSubLink.href = labelHref;
      firstSubLink.className = 'submenu-parent-link';
      firstSubLink.textContent = labelText;
      // Insert as first child of submenu
      submenu.insertAdjacentElement('afterbegin', firstSubLink);
    }

    // Toggle function that also closes other open submenus
    function toggleSubmenu() {
      const isOpen = li.classList.toggle('open');
      labelBtn.setAttribute('aria-expanded', String(isOpen));

      if (isOpen) {
        // close any other open submenus
        const others = document.querySelectorAll('#site-nav li.open');
        others.forEach(o => {
          if (o !== li) {
            o.classList.remove('open');
            const btn = o.querySelector('.subnav-label');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });
      }
    }

    // Click to toggle
    labelBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSubmenu();
    });

    // Mobile behavior: when nav is in mobile mode, clicking the (now button) label toggles instead of navigating
    const mq = window.matchMedia('(max-width: 765px)');
    // (labelBtn already toggles on click)

    // Desktop hover: open submenu on hover (for pointer users)
    function onMouseEnter() {
      if (!mq.matches) {
        li.classList.add('open');
        labelBtn.setAttribute('aria-expanded', 'true');
      }
    }

    function onMouseLeave() {
      if (!mq.matches) {
        li.classList.remove('open');
        labelBtn.setAttribute('aria-expanded', 'false');
      }
    }

    li.addEventListener('mouseenter', onMouseEnter);
    li.addEventListener('mouseleave', onMouseLeave);
  });
})();
