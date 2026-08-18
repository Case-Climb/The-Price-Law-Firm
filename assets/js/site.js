/* The Price Law Firm — progressive enhancement only.
   Every page renders fully without JS; this adds interaction. */
(function () {
  'use strict';

  var doc = document;
  var body = doc.body;

  /* -------------------------------------------------- sticky header state */
  var header = doc.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) header.classList.add('solid');
      else header.classList.remove('solid');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --------------------------------------------------- desktop dropdowns */
  var dropItems = doc.querySelectorAll('.nav-item.has-dropdown');
  Array.prototype.forEach.call(dropItems, function (item) {
    var btn = item.querySelector('.nav-link');
    var closeTimer;

    var open = function () { clearTimeout(closeTimer); closeItems(item); item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); };
    var close = function () { item.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', function () { closeTimer = setTimeout(close, 140); });
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('open')) close(); else open();
    });
    item.addEventListener('focusout', function (e) {
      if (!item.contains(e.relatedTarget)) close();
    });
  });

  function closeItems(except) {
    Array.prototype.forEach.call(dropItems, function (i) {
      if (i !== except) { i.classList.remove('open'); var b = i.querySelector('.nav-link'); if (b) b.setAttribute('aria-expanded', 'false'); }
    });
  }

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeItems(null);
      if (body.classList.contains('nav-open')) toggleNav(false);
      var cw = doc.querySelector('.chat-widget.open');
      if (cw) cw.classList.remove('open');
    }
  });

  /* ------------------------------------------------------- mobile drawer */
  var burger = doc.querySelector('.burger');
  function toggleNav(force) {
    var willOpen = typeof force === 'boolean' ? force : !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', willOpen);
    if (burger) burger.setAttribute('aria-expanded', String(willOpen));
  }
  if (burger) burger.addEventListener('click', function () { toggleNav(); });

  Array.prototype.forEach.call(doc.querySelectorAll('.m-toggle'), function (t) {
    t.addEventListener('click', function () {
      var sub = t.nextElementSibling;
      var isOpen = sub.classList.toggle('open');
      t.setAttribute('aria-expanded', String(isOpen));
    });
  });

  /* ------------------------------------------------------- FAQ accordion */
  Array.prototype.forEach.call(doc.querySelectorAll('.faq__item'), function (item) {
    var q = item.querySelector('.faq__q');
    var a = item.querySelector('.faq__a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // Accordion behavior: one open at a time within a group.
      var group = item.parentElement;
      Array.prototype.forEach.call(group.querySelectorAll('.faq__item.open'), function (o) {
        o.classList.remove('open');
        o.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        o.querySelector('.faq__a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
  window.addEventListener('resize', function () {
    Array.prototype.forEach.call(doc.querySelectorAll('.faq__item.open .faq__a'), function (a) {
      a.style.maxHeight = a.scrollHeight + 'px';
    });
  });

  /* ---------------------------------------------------------- carousels */
  Array.prototype.forEach.call(doc.querySelectorAll('.carousel'), function (car) {
    var track = car.querySelector('.carousel__track');
    var prev = car.querySelector('[data-dir="prev"]');
    var next = car.querySelector('[data-dir="next"]');
    if (!track) return;
    var step = function () {
      var first = track.firstElementChild;
      return first ? first.getBoundingClientRect().width + 24 : 320;
    };
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  });

  /* ------------------------------------------------------- chat widget */
  var chat = doc.querySelector('.chat-widget');
  if (chat) {
    var toggle = chat.querySelector('.chat-toggle');
    toggle.addEventListener('click', function () {
      var open = chat.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      if (open) { var f = chat.querySelector('input, textarea'); if (f) f.focus(); }
    });
    doc.addEventListener('click', function (e) {
      if (chat.classList.contains('open') && !chat.contains(e.target)) {
        chat.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------------- forms */
  /* Until a submission endpoint is configured via data-endpoint, the forms
     hand off to the user's mail client rather than silently failing. */
  Array.prototype.forEach.call(doc.querySelectorAll('form[data-contact-form]'), function (form) {
    form.addEventListener('submit', function (e) {
      var endpoint = form.getAttribute('data-endpoint');
      if (endpoint) return; // real endpoint configured — let it post normally
      e.preventDefault();
      var get = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
      var name = get('name'), phone = get('phone'), email = get('email'), message = get('message');
      if (!name || !phone) {
        setStatus(form, 'Please add your name and a phone number so we can reach you.', true);
        return;
      }
      var subject = encodeURIComponent('Website consultation request — ' + name);
      var lines = ['Name: ' + name, 'Phone: ' + phone];
      if (email) lines.push('Email: ' + email);
      lines.push('', message || '(No message provided)');
      var href = 'mailto:' + (form.getAttribute('data-mailto') || '') + '?subject=' + subject + '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      setStatus(form, 'Opening your email app to send this to Bill Price. Prefer to talk now? Call ' + (form.getAttribute('data-phone') || '') + '.', false);
    });
  });

  function setStatus(form, text, isError) {
    var el = form.querySelector('.form-status');
    if (!el) { el = doc.createElement('p'); el.className = 'form-status form-note'; form.appendChild(el); }
    el.textContent = text;
    el.style.color = isError ? '#B45309' : '';
    el.setAttribute('role', 'status');
  }

  /* -------------------------------------------------- blog category filter */
  var filters = doc.querySelectorAll('.filter-btn');
  if (filters.length) {
    Array.prototype.forEach.call(filters, function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-cat');
        Array.prototype.forEach.call(filters, function (b) { b.classList.toggle('active', b === btn); });
        Array.prototype.forEach.call(doc.querySelectorAll('[data-post-cat]'), function (card) {
          var show = cat === 'all' || card.getAttribute('data-post-cat') === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* --------------------------------------------------------- scroll reveal */
  /* A throttled sweep rather than IntersectionObserver: IO only
     fires while an element is actually intersecting, so a jump scroll
     (anchor link, End key, restored position, fast flick) can skip elements
     entirely and leave them stuck at opacity 0 forever. This reveals anything
     that has ever reached the fold, and never un-reveals. */
  var pending = Array.prototype.slice.call(doc.querySelectorAll('.reveal'));
  var ticking = null;
  var lastRun = 0;

  function sweep() {
    var vh = window.innerHeight || doc.documentElement.clientHeight;
    for (var i = pending.length - 1; i >= 0; i--) {
      if (pending[i].getBoundingClientRect().top < vh * 0.94) {
        pending[i].classList.add('in');
        pending.splice(i, 1);
      }
    }
    if (!pending.length) {
      window.removeEventListener('scroll', queueSweep);
      window.removeEventListener('resize', queueSweep);
    }
  }

  /* Time-throttled rather than rAF-driven: rAF is paused in background tabs,
     which can leave a restored scroll position stuck with hidden content. */
  function queueSweep() {
    var now = Date.now();
    if (now - lastRun > 100) { lastRun = now; sweep(); return; }
    clearTimeout(ticking);
    ticking = setTimeout(function () { lastRun = Date.now(); sweep(); }, 100);
  }

  if (pending.length) {
    window.addEventListener('scroll', queueSweep, { passive: true });
    window.addEventListener('resize', queueSweep);
    sweep();
    // Catch late layout shifts (web fonts, map iframe) that move elements up.
    window.addEventListener('load', queueSweep);
  }

  /* ------------------------------------------------- current year in footer */
  Array.prototype.forEach.call(doc.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
