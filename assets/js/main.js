(() => {
  const config = window.SITE_CONFIG || {};
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');

  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Abrir menú');
    });
  });

  const validWhatsApp = /^\d{8,15}$/.test(config.whatsappNumber || '');
  const waUrl = validWhatsApp
    ? `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage || '')}`
    : '#contacto';

  document.querySelectorAll('.whatsapp-link').forEach(link => {
    link.href = waUrl;
    if (validWhatsApp) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  const schema = document.querySelector('#business-schema');
  if (schema && validWhatsApp) {
    try {
      const json = JSON.parse(schema.textContent);
      json.telephone = `+${config.whatsappNumber}`;
      schema.textContent = JSON.stringify(json);
    } catch (_) {}
  }

  const gallery = document.querySelector('#gallery-grid');
  const images = Array.isArray(config.galleryImages) ? config.galleryImages : [];
  if (gallery) {
    if (!images.length) {
      gallery.innerHTML = `
        <div class="gallery-empty reveal visible">
          <div><strong>La galería está lista.</strong><br>Agrega las fotografías de trabajos en <code>assets/img/galeria/</code> y decláralas en <code>assets/js/config.js</code>.</div>
        </div>`;
    } else {
      const fragment = document.createDocumentFragment();
      images.forEach((item, index) => {
        const figure = document.createElement('figure');
        figure.className = 'gallery-item reveal';
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || item.title || 'Trabajo de gasfitería a domicilio';
        img.loading = index < 3 ? 'eager' : 'lazy';
        img.decoding = 'async';
        const caption = document.createElement('figcaption');
        caption.className = 'gallery-caption';
        caption.textContent = item.title || 'Trabajo realizado';
        figure.append(img, caption);
        fragment.appendChild(figure);
      });
      gallery.appendChild(fragment);
    }
  }

  document.querySelector('#year').textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }
})();
