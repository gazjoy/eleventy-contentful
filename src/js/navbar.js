/**
 * Navbar Menu Interactions & Scroll Behavior
 * 
 * Handles:
 * - Scroll-aware header styling (transparent to solid on home page)
 * - Menu toggle (open/close on button click)
 * - Close on click-outside
 * - Close on Escape key
 * - Mobile menu toggle
 */

(function () {
  const navButtons = document.querySelectorAll('[data-section]');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('nav-menu');
  const iconHamburger = document.getElementById('icon-hamburger');
  const iconClose = document.getElementById('icon-close');

  // ── Desktop mega-menu interactions ─────────────────────────
  if (navButtons.length > 0) {
    navButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const sectionId = button.getAttribute('data-section');

        // Close all other menus
        navButtons.forEach((btn) => {
          if (btn !== button) {
            btn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current menu
        button.setAttribute('aria-expanded', !isExpanded);
      });
    });

    // Close menu on click outside
    document.addEventListener('click', () => {
      navButtons.forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navButtons.forEach((btn) => {
          btn.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // ── Mobile menu toggle ─────────────────────────────────────
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        iconHamburger.classList.add('hidden');
        iconClose.classList.remove('hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenu.classList.add('hidden');
        iconHamburger.classList.remove('hidden');
        iconClose.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu on menu link click
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        iconHamburger.classList.remove('hidden');
        iconClose.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!header?.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        iconHamburger.classList.remove('hidden');
        iconClose.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
