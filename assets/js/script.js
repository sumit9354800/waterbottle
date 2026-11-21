/* ===== EDIT HERE: site settings & products ===== */
const SITE = { name: 'AquaDrop', tagline: 'Packaged drinking water supply for businesses.', phone: '+91 XXXXX XXXXX', email: 'info@example.com', location: 'Update with your service area', whatsapp: '91XXXXXXXXXX' };
const U = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
/* Replace image with your own file, e.g. image:'images/500ml.jpg' */
const PRODUCTS = [
    { name: '250 ML Water Bottle', size: '250 ML', cat: 'Events & Meetings', desc: 'A handy size for meetings, conferences and event requirements.', image: U('photo-1548839140-29a749e1cf4d') },
    { name: '500 ML Water Bottle', size: '500 ML', cat: 'Daily Office Supply', desc: 'A convenient bottle size for everyday workplace and customer needs.', image: U('photo-1523362628745-0c100150b504') },
    { name: '1 Litre Water Bottle', size: '1 LITRE', cat: 'Hotels & Restaurants', desc: 'A larger everyday option for hospitality and business use.', image: U('photo-1602143407151-7111542de6e8') },
    { name: '2 Litre Water Bottle', size: '5 LITRE', cat: 'Bulk Requirements', desc: 'A larger format for customers with higher-volume requirements.', image: 'https://m.media-amazon.com/images/I/51JLnWKzbML.jpg' }];
/* ================================================= */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const waOK = !SITE.whatsapp.includes('X');
const page = location.pathname.split('/').pop() || 'index.html';
const NAV = [['index.html', 'Home'], ['products.html', 'Products'], ['about.html', 'About us'], ['contact.html', 'Contact']];
const ic = (n, c = 'w-5 h-5') => `<i data-lucide="${n}" class="${c}"></i>`;

const card = p => `<article class="card rv zoom overflow-hidden"><div class="relative aspect-[4/3] overflow-hidden img-fb"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" class="h-full w-full object-cover"><span class="absolute left-3 top-3 rounded-md bg-[#071b42] px-2.5 py-1 text-xs font-bold tracking-wide text-white">${esc(p.size)}</span></div><div class="p-6"><p class="eyebrow !text-[10px]">${esc(p.cat)}</p><h3 class="mt-2 text-lg font-extrabold text-[#071b42]">${esc(p.name)}</h3><p class="mt-2 min-h-[3rem] text-sm leading-6 text-slate-500">${esc(p.desc)}</p><a href="contact.html?product=${encodeURIComponent(p.name)}" class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:gap-3 transition-all">Enquire now ${ic('arrow-right', 'w-4 h-4')}</a></div></article>`;

$('#site-header').innerHTML = `<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"><div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"><a href="index.html" class="flex items-center gap-2.5" aria-label="${SITE.name} home"><span class="grid h-10 w-10 place-items-center rounded-lg bg-[#071b42] text-cyan-300">${ic('droplets', 'w-5 h-5')}</span><span class="fh text-xl font-extrabold text-[#071b42]">Aqua<span class="text-blue-600">Drop</span></span></a><nav class="hidden items-center gap-9 text-sm font-semibold lg:flex" aria-label="Main">${NAV.map(n => `<a href="${n[0]}" class="transition ${page === n[0] ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'}">${n[1]}</a>`).join('')}</nav><a href="contact.html" class="btn btn-primary hidden !py-2.5 lg:inline-flex">Get a Quote</a><button id="menu-toggle" class="p-2 lg:hidden" aria-label="Toggle navigation" aria-expanded="false"><span id="i-open">${ic('menu', 'w-6 h-6')}</span><span id="i-close" class="hidden">${ic('x', 'w-6 h-6')}</span></button></div><nav id="mobile-menu" class="hidden border-t border-slate-100 bg-white px-6 py-5 lg:hidden"><div class="flex flex-col gap-4 font-semibold">${NAV.map(n => `<a href="${n[0]}">${n[1]}</a>`).join('')}<a href="contact.html" class="btn btn-primary">Get a Quote</a></div></nav></header>`;
$('#site-footer').innerHTML = `<footer class="bg-[#04122c] text-slate-300"><div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3"><div><a href="index.html" class="flex items-center gap-2.5 text-white"><span class="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-cyan-300">${ic('droplets')}</span><span class="fh text-xl font-extrabold">AquaDrop</span></a><p class="mt-4 max-w-xs text-sm text-slate-400">${esc(SITE.tagline)}</p></div><div><p class="fh font-bold text-white">Quick links</p><div class="mt-4 flex flex-col gap-2.5 text-sm">${NAV.map(n => `<a class="hover:text-white" href="${n[0]}">${n[1]}</a>`).join('')}</div></div><div class="text-sm"><p class="fh font-bold text-white">Contact</p><ul class="mt-4 space-y-3"><li class="flex gap-3">${ic('phone', 'w-4 h-4 mt-0.5 shrink-0 text-cyan-300')}${esc(SITE.phone)}</li><li class="flex gap-3">${ic('mail', 'w-4 h-4 mt-0.5 shrink-0 text-cyan-300')}${esc(SITE.email)}</li><li class="flex gap-3">${ic('map-pin', 'w-4 h-4 mt-0.5 shrink-0 text-cyan-300')}${esc(SITE.location)}</li></ul></div></div><p class="border-t border-white/10 py-5 text-center text-xs text-slate-500">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p></footer>` + (waOK ? `<a class="whatsapp-float" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ic('message-circle', 'w-6 h-6')}</a>` : '');

const mt = $('#menu-toggle'), mm = $('#mobile-menu');
mt.addEventListener('click', () => { const h = mm.classList.toggle('hidden'); mt.setAttribute('aria-expanded', String(!h)); $('#i-open').classList.toggle('hidden', !h); $('#i-close').classList.toggle('hidden', h) });

const pg = $('#products-grid'); if (pg) pg.innerHTML = PRODUCTS.slice(0, +pg.dataset.limit || 99).map(card).join('');
$$('[data-count]').forEach(el => { const t = +el.dataset.count; let n = 0; const id = setInterval(() => { n = Math.min(t, n + Math.ceil(t / 25)); el.textContent = n + (el.dataset.suffix || ''); if (n >= t) clearInterval(id) }, 40) });
if ($('#c-phone')) { $('#c-phone').textContent = SITE.phone; $('#c-email').textContent = SITE.email; $('#c-loc').textContent = SITE.location }

const form = $('#enquiry-form');
if (form) {
    const sel = $('#product'); sel.innerHTML = '<option value="">Select a bottle size</option>' + PRODUCTS.map(p => `<option>${esc(p.name)}</option>`).join('') + '<option>Not sure - need advice</option>';
    const pre = new URLSearchParams(location.search).get('product'); if (pre && PRODUCTS.some(p => p.name === pre)) sel.value = pre;
    const msg = $('#form-msg');
    form.addEventListener('submit', e => {
        e.preventDefault(); let ok = true;
        $$('[required]', form).forEach(el => { let g = el.value.trim() !== ''; if (g && el.name === 'phone') g = /^[6-9]\d{9}$/.test(el.value.replace(/[\s-]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '')); el.classList.toggle('err', !g); if (!g) ok = false });
        const em = form.email.value.trim(); if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { form.email.classList.add('err'); ok = false }
        msg.className = 'mt-5 rounded-lg p-4 text-sm';
        if (!ok) { msg.classList.add('border', 'border-red-200', 'bg-red-50', 'text-red-800'); msg.textContent = 'Please fix the highlighted fields. Mobile must be a valid 10-digit number.'; return }
        const d = Object.fromEntries(new FormData(form));
        const text = `New AquaDrop enquiry\nName: ${d.name}\nCompany: ${d.company || '-'}\nPhone: ${d.phone}\nEmail: ${d.email || '-'}\nProduct: ${d.product}\nQuantity: ${d.quantity}\nLocation: ${d.location}\nFrequency: ${d.frequency || '-'}\nNotes: ${d.message || '-'}`;
        msg.classList.add('border', 'border-green-200', 'bg-green-50', 'text-green-800', 'font-semibold');
        if (waOK) { msg.textContent = 'Thank you! Opening WhatsApp so you can send your enquiry to our team.'; window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener') }
        else msg.textContent = 'Form is valid. Demo mode: nothing was sent or saved. Set your WhatsApp number in assets/js/script.js to receive enquiries.';
        form.reset()
    });
    $$('.form-input', form).forEach(i => i.addEventListener('input', () => i.classList.remove('err')));
}
$$('img').forEach(i => i.addEventListener('error', () => { i.style.opacity = 0 }));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .1 });
$$('.rv').forEach(el => io.observe(el));
lucide.createIcons();
