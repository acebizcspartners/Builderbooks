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

  function createStatusMessage(form, text, isError) {
    var existing = form.querySelector('.form-status');
    if (existing) existing.remove();
    var msg = document.createElement('div');
    msg.className = 'form-status';
    msg.textContent = text;
    msg.style.marginTop = '1rem';
    msg.style.padding = '1rem';
    msg.style.borderRadius = '0.5rem';
    msg.style.fontWeight = '600';
    msg.style.backgroundColor = isError ? '#f8d7da' : '#d4edda';
    msg.style.color = isError ? '#842029' : '#0f5132';
    form.appendChild(msg);
    return msg;
  }

  document.querySelectorAll('form.lead-form').forEach(function (form) {
    if (!form.action || !form.action.includes('n8n.cloud/webhook/form')) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'cors'
      }).then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      }).then(function () {
        createStatusMessage(form, 'Thanks — your message has been received. We will call you back soon.', false);
        form.reset();
      }).catch(function () {
        createStatusMessage(form, 'Sorry, something went wrong. Please try again or call us on 0431 516 783.', true);
      }).finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send — we'll call you back today";
        }
      });
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

  // Scroll-reveal: fade-up cards and section headings as they enter viewport
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    var revealTargets = document.querySelectorAll(
      'section h2, .pain-card, .step-card, .testi-card, .areas-card, .service-card, ' +
      '.why-stat, .lm-doc, .price-card, .final-card, .faq details, .eyebrow'
    );
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  }
})();
