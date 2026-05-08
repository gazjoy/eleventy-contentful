/**
 * Navbar Menu Interactions
 * 
 * Handles:
 * - Menu toggle (open/close on button click)
 * - Close on click-outside
 * - Close on Escape key
 * - Mobile menu toggle
 */

(function () {
  // Desktop mega-menu interactions
  const navButtons = document.querySelectorAll('[data-section]');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('nav-menu');

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

  // Mobile menu toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        document.getElementById('icon-hamburger')?.classList.add('hidden');
        document.getElementById('icon-close')?.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        document.getElementById('icon-hamburger')?.classList.remove('hidden');
        document.getElementById('icon-close')?.classList.add('hidden');
      }
    });

    // Close mobile menu on menu link click
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.getElementById('icon-hamburger')?.classList.remove('hidden');
        document.getElementById('icon-close')?.classList.add('hidden');
      });
    });
  }
})();
