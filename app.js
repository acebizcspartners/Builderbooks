// Builder Accountant — minimal progressive enhancement
// Sticky header shadow on scroll, current year, FAQ analytics hook.

(function () {
  'use strict';

  // Current year in footer
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Header shadow on scroll
  var hdr = document.getElementById('hdr');
  if (hdr) {
    var lastY = -1;
    var onScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      if ((y > 8) !== (lastY > 8)) {
        hdr.classList.toggle('is-scrolled', y > 8);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Optional: track phone-call clicks for whichever analytics is wired in later.
  // Replace gtag/dataLayer with your provider when ready.
  document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_to_call', {
          event_category: 'engagement',
          event_label: a.getAttribute('href').replace('tel:', '')
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'click_to_call', phone: a.getAttribute('href').replace('tel:', '') });
      }
    });
  });

  // Close other open FAQ items when one opens (accordion behaviour)
  var faqItems = document.querySelectorAll('.faq details');
  faqItems.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        faqItems.forEach(function (other) {
          if (other !== d && other.open) other.open = false;
        });
      }
    });
  });
})();
