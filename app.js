/* app.js — shared chrome + interactions */

const PHONE = '(226) 336-9338';
const TEL = 'tel:2263369338';

const NAV = {
  services: [
    ['🚨','Emergency Lockout','emergency-locksmith.html'],
    ['🏠','Residential','residential.html'],
    ['🏢','Commercial','commercial.html'],
    ['🚗','Automotive','automotive.html'],
    ['🔒','Lock Change','lock-change.html'],
    ['🗝️','Rekeying','rekeying.html'],
    ['🔑','Car Key Replacement','car-key-replacement.html'],
  ],
  areas: [
    ['📍','Kitchener','locksmith-kitchener.html'],
    ['📍','Waterloo','locksmith-waterloo.html'],
    ['📍','Cambridge','locksmith-cambridge.html'],
    ['📍','New Hamburg','locksmith-new-hamburg.html'],
    ['📍','Guelph','locksmith-guelph.html'],
    ['📍','Fergus','locksmith-fergus.html'],
  ],
  more: [
    ['ℹ️','About Us','about.html'],
    ['❓','FAQ','faq.html'],
    ['✉️','Contact','contact.html'],
  ]
};

function injectChrome(active) {
  // App bar
  const bar = document.getElementById('appbar');
  if (bar) bar.innerHTML = `
    <a href="index.html" class="brand" aria-label="Locksmiths365 home"><svg class="logo-mark" width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="lgAmber" x1="0" y1="0" x2="48" y2="48">
      <stop offset="0" stop-color="#ffc861"/>
      <stop offset="1" stop-color="#d9850f"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#lgAmber)"/>
  <rect x="2" y="2" width="44" height="44" rx="13" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
  <circle cx="24" cy="19" r="7.5" fill="#0a0e17"/>
  <path d="M20.5 23 L27.5 23 L30 36 L18 36 Z" fill="#0a0e17"/>
  <circle cx="24" cy="19" r="2.6" fill="url(#lgAmber)"/>
</svg><span class="brand-word">Locksmiths<em>365</em></span></a>
    <button class="menu-btn" aria-label="Menu" onclick="openDrawer()"><span></span></button>
  `;

  // Drawer
  const drawerWrap = document.getElementById('drawer-wrap');
  const sec = (label, items) => `
    <div class="drawer-group-label">${label}</div>
    ${items.map(([i,l,h]) => `<a class="dlink ${h===active?'active':''}" href="${h}"><span class="di">${i}</span>${l}</a>`).join('')}
  `;
  if (drawerWrap) drawerWrap.innerHTML = `
    <div class="drawer-scrim" id="scrim" onclick="closeDrawer()"></div>
    <aside class="drawer" id="drawer">
      <div class="drawer-head">
        <a href="index.html" class="brand" aria-label="Locksmiths365 home"><svg class="logo-mark" width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="lgAmber" x1="0" y1="0" x2="48" y2="48">
      <stop offset="0" stop-color="#ffc861"/>
      <stop offset="1" stop-color="#d9850f"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#lgAmber)"/>
  <rect x="2" y="2" width="44" height="44" rx="13" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
  <circle cx="24" cy="19" r="7.5" fill="#0a0e17"/>
  <path d="M20.5 23 L27.5 23 L30 36 L18 36 Z" fill="#0a0e17"/>
  <circle cx="24" cy="19" r="2.6" fill="url(#lgAmber)"/>
</svg><span class="brand-word">Locksmiths<em>365</em></span></a>
        <button class="drawer-close" onclick="closeDrawer()" aria-label="Close">✕</button>
      </div>
      <a class="dlink ${active==='index.html'?'active':''}" href="index.html"><span class="di">🏡</span>Home</a>
      ${sec('Services', NAV.services)}
      ${sec('Service Areas', NAV.areas)}
      ${sec('Company', NAV.more)}
      <div class="drawer-cta">
        <a href="${TEL}" class="btn btn-amber">📞 Call ${PHONE}</a>
        <a href="contact.html" class="btn btn-ghost">Request a Quote</a>
      </div>
    </aside>
  `;

  // Footer
  const f = document.getElementById('footer');
  if (f) f.innerHTML = `
    <footer class="footer">
      <a href="index.html" class="brand" aria-label="Locksmiths365 home"><svg class="logo-mark" width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="lgAmber" x1="0" y1="0" x2="48" y2="48">
      <stop offset="0" stop-color="#ffc861"/>
      <stop offset="1" stop-color="#d9850f"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#lgAmber)"/>
  <rect x="2" y="2" width="44" height="44" rx="13" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
  <circle cx="24" cy="19" r="7.5" fill="#0a0e17"/>
  <path d="M20.5 23 L27.5 23 L30 36 L18 36 Z" fill="#0a0e17"/>
  <circle cx="24" cy="19" r="2.6" fill="url(#lgAmber)"/>
</svg><span class="brand-word">Locksmiths<em>365</em></span></a>
      <p class="fdesc">Locally owned & operated. Your trusted 24/7 locksmith across Kitchener, Waterloo, Cambridge and the surrounding region — licensed, insured, and fast.</p>
      <a href="${TEL}" class="footer-phone">📞 ${PHONE}</a>
      <div class="fcols">
        <div class="fcol">
          <h5>Services</h5>
          <a href="emergency-locksmith.html">Emergency Lockout</a>
          <a href="residential.html">Residential</a>
          <a href="commercial.html">Commercial</a>
          <a href="automotive.html">Automotive</a>
          <a href="lock-change.html">Lock Change</a>
          <a href="rekeying.html">Rekeying</a>
        </div>
        <div class="fcol">
          <h5>Areas</h5>
          <a href="locksmith-kitchener.html">Kitchener</a>
          <a href="locksmith-waterloo.html">Waterloo</a>
          <a href="locksmith-cambridge.html">Cambridge</a>
          <a href="locksmith-new-hamburg.html">New Hamburg</a>
          <a href="locksmith-guelph.html">Guelph</a>
          <a href="locksmith-fergus.html">Fergus</a>
          <h5 style="margin-top:22px">Company</h5>
          <a href="about.html">About</a>
          <a href="faq.html">FAQ</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div class="fbottom">
        © ${new Date().getFullYear()} Locksmith365.ca · Licensed & Insured<br>
        Locally operated · Serving Kitchener, Waterloo, Cambridge, New Hamburg, Guelph & Fergus
      </div>
    </footer>
  `;

  // Call dock
  const dock = document.getElementById('call-dock');
  if (dock) dock.innerHTML = `
    <a href="${TEL}"><span class="btn btn-amber">📞 Call Now</span></a>
    <a href="contact.html"><span class="btn btn-ghost">Get a Quote</span></a>
  `;

  setupReveals();
  setupFaq();
}

function openDrawer() {
  document.getElementById('drawer')?.classList.add('open');
  document.getElementById('scrim')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('drawer')?.classList.remove('open');
  document.getElementById('scrim')?.classList.remove('open');
  document.body.style.overflow = '';
}

function setupReveals() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => io.observe(e));
}

function setupFaq() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const open = item.classList.contains('open');
      const a = item.querySelector('.faq-a');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
}

// Auto-init: reads the active page from the .app container's data-page
// attribute, so every page only needs a single `<script src="app.js" defer>`
// tag with no extra inline call. Safe with `defer` — DOMContentLoaded always
// fires after deferred scripts finish executing, and the .app element with
// its data-page attribute is already in the parsed HTML by then.
document.addEventListener('DOMContentLoaded', () => {
  const appEl = document.querySelector('.app');
  const active = appEl ? appEl.getAttribute('data-page') || '' : '';
  injectChrome(active);
});
