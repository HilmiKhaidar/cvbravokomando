/* ═══════════════════════════════════════════
   SUPABASE CONFIG
═══════════════════════════════════════════ */
const SUPABASE_URL = 'https://utmuwelyakuxdxokwhnl.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_2lOaSrEYxwgF3j6sktjnDQ_2oipXveR'
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

/* ═══════════════════════════════════════════
   NAVBAR — scroll effect + hamburger
═══════════════════════════════════════════ */
const navbar    = document.getElementById('navbar')
const hamburger = document.getElementById('hamburger')
const navLinks  = document.getElementById('navLinks')

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50)
})

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  navLinks.classList.toggle('open')
})

// Close menu on link click
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open')
    navLinks.classList.remove('open')
  })
})

/* ═══════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      revealObserver.unobserve(e.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

document.querySelectorAll('.reveal, .reveal-right, .reveal-left').forEach(el => {
  revealObserver.observe(el)
})

/* ═══════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════ */
const elTahun = document.getElementById('tahun')
if (elTahun) elTahun.textContent = new Date().getFullYear()

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function formatTanggal(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function waNumber(phone) {
  return (phone || '').replace(/\D/g, '').replace(/^0/, '62')
}

const ICON_SVG = {
  Users:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Search:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  FileText:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  TrendingUp:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  Sparkles:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z"/><path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z"/></svg>`,
  Wrench:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  Car:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  Briefcase: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  Monitor:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  Settings:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  UserCheck: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
}

const GRADIENT_PALETTE = [
  'linear-gradient(135deg,#0ea5e9,#1e40af)',
  'linear-gradient(135deg,#dc2626,#9f1239)',
  'linear-gradient(135deg,#0ea5e9,#0284c7)',
  'linear-gradient(135deg,#1e40af,#1e3a8a)',
  'linear-gradient(135deg,#0ea5e9,#1e293b)',
  'linear-gradient(135deg,#dc2626,#1e293b)',
]

/* ═══════════════════════════════════════════
   LOAD KONTEN (Hero, Tentang, VisiMisi, Kontak)
═══════════════════════════════════════════ */
async function loadKonten() {
  const { data } = await sb.from('konten').select('kunci, nilai')
  if (!data?.length) return
  const k = {}
  data.forEach(r => { k[r.kunci] = r.nilai })

  // Hero
  if (k.hero_badge)   setEl('heroBadge', k.hero_badge)
  if (k.hero_tagline) {
    const el = document.getElementById('heroTitle')
    if (el) {
      const t = k.hero_tagline
      if (t.includes('Terpercaya')) {
        const [before, after] = t.split('Terpercaya')
        el.innerHTML = `${before}<span class="text-primary">Terpercaya</span>${after}`
      } else {
        el.textContent = t
      }
    }
  }
  if (k.hero_subteks) setEl('heroSub', k.hero_subteks)
  for (let n = 1; n <= 4; n++) {
    if (k[`hero_stat${n}_nilai`]) setEl(`stat${n}Val`, k[`hero_stat${n}_nilai`])
    if (k[`hero_stat${n}_label`]) setEl(`stat${n}Lbl`, k[`hero_stat${n}_label`])
  }

  // Tentang
  for (let n = 1; n <= 4; n++) {
    if (k[`tentang_par${n}`]) setEl(`tentangPar${n}`, k[`tentang_par${n}`])
  }

  // Visi Misi
  if (k.visi_teks) setEl('visiTeks', k.visi_teks)

  const misiList = document.getElementById('misiList')
  if (misiList) {
    const items = [k.misi1, k.misi2, k.misi3, k.misi4].filter(Boolean)
    if (items.length) {
      misiList.innerHTML = items.map((m, i) =>
        `<li><span class="misi-num">${i+1}</span><p>${m}</p></li>`
      ).join('')
    }
  }

  const mutuGrid = document.getElementById('mutuGrid')
  if (mutuGrid) {
    const items = [k.mutu1, k.mutu2, k.mutu3, k.mutu4, k.mutu5, k.mutu6].filter(Boolean)
    if (items.length) {
      const checkSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
      mutuGrid.innerHTML = items.map(m =>
        `<div class="mutu-item">${checkSvg}<p>${m}</p></div>`
      ).join('')
    }
  }

  // Kontak info
  const tel   = k.kontak_telepon || '0853 5351 7176'
  const email = k.kontak_email   || 'ptbravokomandogrup@gmail.com'
  const alamat = k.kontak_alamat || ''
  const wa    = waNumber(tel)

  setEl('kontakAlamat', alamat)
  setEl('kontakTelepon', tel)
  setEl('kontakEmail', email)
  setHref('kontakTeleponLink', `tel:+${wa}`)
  setHref('kontakEmailLink', `mailto:${email}`)
  setHref('waBtn', `https://wa.me/${wa}`)

  setEl('footerAlamat', alamat)
  const footerTel = document.getElementById('footerTelepon')
  if (footerTel) { footerTel.textContent = tel; footerTel.href = `tel:+${wa}` }
  const footerEmail = document.getElementById('footerEmail')
  if (footerEmail) { footerEmail.textContent = email; footerEmail.href = `mailto:${email}` }
}

function setEl(id, text) {
  const el = document.getElementById(id)
  if (el) el.textContent = text
}
function setHref(id, href) {
  const el = document.getElementById(id)
  if (el) el.href = href
}

/* ═══════════════════════════════════════════
   LOAD LAYANAN
═══════════════════════════════════════════ */
async function loadLayanan() {
  const grid = document.getElementById('layananGrid')
  if (!grid) return
  const { data } = await sb.from('layanan').select('*').order('urutan', { ascending: true })
  if (!data?.length) {
    // Fallback ke default hardcoded
    grid.innerHTML = defaultLayananHTML()
    return
  }
  grid.innerHTML = data.map(item => {
    const iconHtml = ICON_SVG[item.icon] || `<span style="font-size:1.25rem;">${item.icon}</span>`
    return `
      <div class="layanan-card reveal">
        <div class="layanan-icon">${iconHtml}</div>
        <h3 class="layanan-title">${item.title}</h3>
        <p class="layanan-desc">${item.description}</p>
      </div>
    `
  }).join('')
  // Re-observe reveal
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
}

function defaultLayananHTML() {
  const defaults = [
    { icon: 'Users', title: 'Penyedia Jasa Tenaga Kerja', description: 'Menyediakan tenaga kerja profesional, terlatih, disiplin dan bertanggung jawab sesuai kebutuhan perusahaan Anda.' },
    { icon: 'Search', title: 'Manajemen Proses Verifikasi', description: 'Layanan verifikasi data dan dokumen tenaga kerja secara menyeluruh untuk memastikan kualitas dan integritas.' },
    { icon: 'FileText', title: 'Manajemen Proses Penagihan', description: 'Pengelolaan proses penagihan yang efisien dan transparan untuk mendukung kelancaran operasional bisnis.' },
    { icon: 'TrendingUp', title: 'Manajemen Proses Penjualan', description: 'Solusi manajemen penjualan yang terstruktur untuk membantu perusahaan meningkatkan produktivitas.' },
    { icon: 'Sparkles', title: 'Jasa Kebersihan Kantor', description: 'Petugas kebersihan profesional yang menjaga kebersihan dan kenyamanan lingkungan kerja Anda.' },
    { icon: 'Wrench', title: 'Jasa Tenaga Teknisi', description: 'Tenaga teknisi berpengalaman di bidang perawatan gedung, elektrik, dan kelistrikan.' },
    { icon: 'Car', title: 'Jasa Supir / Pramubakti', description: 'Tenaga supir dan pramubakti profesional dengan sistem pemantauan remote monitoring.' },
    { icon: 'Briefcase', title: 'Agensi & Konsultan SDM', description: 'Layanan konsultasi SDM dan agensi tenaga kerja untuk membantu perusahaan berkembang lebih kompetitif.' },
  ]
  return defaults.map(item => {
    const iconHtml = ICON_SVG[item.icon] || ''
    return `
      <div class="layanan-card reveal">
        <div class="layanan-icon">${iconHtml}</div>
        <h3 class="layanan-title">${item.title}</h3>
        <p class="layanan-desc">${item.description}</p>
      </div>
    `
  }).join('')
}

/* ═══════════════════════════════════════════
   LOAD TIM (infinite marquee)
═══════════════════════════════════════════ */
async function loadTim() {
  const track = document.getElementById('timInner')
  if (!track) return
  const { data } = await sb.from('tim').select('*').eq('aktif', true).order('urutan', { ascending: true })
  if (!data || data.length === 0) {
    track.innerHTML = '<div class="tim-loading">Belum ada data tim.</div>'
    return
  }

  // Duplikasi untuk seamless loop
  const loopData = [...data, ...data]
  const cardW = 288
  const cardGap = 20
  const totalW = (cardW + cardGap) * data.length

  track.innerHTML = loopData.map((m, i) => {
    const grad = GRADIENT_PALETTE[i % GRADIENT_PALETTE.length]
    const photoHtml = m.foto_url
      ? `<img src="${m.foto_url}" alt="${m.nama}" style="width:100%;height:100%;object-fit:cover;object-position:${m.foto_position || 'center center'};" />`
      : `<div class="tim-avatar"><span>${(m.inisial || m.nama?.charAt(0) || 'A').toUpperCase()}</span></div>`
    return `
      <div class="tim-card">
        <div class="tim-photo" style="background:${grad};">${photoHtml}</div>
        <div class="tim-info">
          <p class="tim-name">${m.nama}</p>
          <span class="tim-jabatan">${m.jabatan}</span>
        </div>
      </div>
    `
  }).join('')

  track.style.cssText = `display:flex;gap:${cardGap}px;width:${totalW * 2}px;animation:marquee-tim 28s linear infinite;`
  document.documentElement.style.setProperty('--marquee-offset', `-${totalW}px`)
}

/* ═══════════════════════════════════════════
   LOAD KARIR PREVIEW (index.html)
═══════════════════════════════════════════ */
async function loadKarirPreview() {
  const grid = document.getElementById('karirGrid')
  if (!grid) return

  const { data } = await sb.from('lowongan')
    .select('*')
    .eq('status', 'aktif')
    .order('created_at', { ascending: false })
    .limit(3)

  if (!data || data.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        <p>Belum ada lowongan tersedia saat ini.</p>
      </div>`
    return
  }

  grid.innerHTML = data.map(item => lowonganCardHTML(item)).join('')
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
}

function lowonganCardHTML(item) {
  const deadline = item.deadline ? `
    <div class="meta-row">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Deadline: ${formatTanggal(item.deadline)}
    </div>` : ''
  const lokasi = item.lokasi ? `
    <div class="meta-row">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ${item.lokasi}
    </div>` : ''
  return `
    <a href="karir-detail.html?id=${item.id}" class="lowongan-card reveal">
      <div class="lowongan-badges">
        <span class="badge-tipe">${item.tipe || 'Full Time'}</span>
        <span class="badge-aktif">Aktif</span>
      </div>
      <h3 class="lowongan-posisi">${item.posisi}</h3>
      <div class="lowongan-meta">${lokasi}${deadline}</div>
      <div class="lowongan-footer">
        <span class="lowongan-dept">${item.departemen || 'Umum'}</span>
        <span class="lowongan-cta">
          Lamar
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </a>`
}

/* ═══════════════════════════════════════════
   VALIDASI HELPERS
═══════════════════════════════════════════ */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function isValidPhone(phone) {
  // minimal 8 digit, hanya angka/spasi/tanda +/-
  return /^[\d\s\+\-\(\)]{8,20}$/.test(phone.trim())
}

function showFieldError(fieldId, msg) {
  const el = document.getElementById(fieldId)
  if (!el) return
  el.style.borderColor = '#ef4444'
  let errSpan = el.parentElement.querySelector('.field-err')
  if (!errSpan) {
    errSpan = document.createElement('span')
    errSpan.className = 'field-err'
    errSpan.style.cssText = 'color:#ef4444;font-size:.75rem;margin-top:.25rem;display:block;'
    el.parentElement.appendChild(errSpan)
  }
  errSpan.textContent = msg
}

function clearFieldErrors(formId) {
  const form = document.getElementById(formId)
  if (!form) return
  form.querySelectorAll('.field-err').forEach(el => el.remove())
  form.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '')
}

/* ═══════════════════════════════════════════
   FORM KONTAK SUBMIT
═══════════════════════════════════════════ */
async function submitKontak(e) {
  e.preventDefault()
  clearFieldErrors('kontakForm')

  const nama      = document.getElementById('fNama')?.value.trim()
  const email     = document.getElementById('fEmail')?.value.trim()
  const telepon   = document.getElementById('fTelepon')?.value.trim()
  const perusahaan = document.getElementById('fPerusahaan')?.value.trim()
  const pesan     = document.getElementById('fPesan')?.value.trim()

  let valid = true
  if (!nama) { showFieldError('fNama', 'Nama wajib diisi'); valid = false }
  if (!email) { showFieldError('fEmail', 'Email wajib diisi'); valid = false }
  else if (!isValidEmail(email)) { showFieldError('fEmail', 'Format email tidak valid'); valid = false }
  if (telepon && !isValidPhone(telepon)) { showFieldError('fTelepon', 'Format telepon tidak valid'); valid = false }
  if (!pesan) { showFieldError('fPesan', 'Pesan wajib diisi'); valid = false }
  if (!valid) return

  const btn = document.getElementById('btnKirim')
  btn.disabled = true
  btn.textContent = 'Mengirim...'

  const payload = { nama, perusahaan, email, telepon, pesan }

  const { error } = await sb.from('pesan_kontak').insert(payload)

  if (error) {
    const errEl = document.getElementById('formError')
    if (errEl) { errEl.textContent = 'Gagal mengirim pesan. Silakan coba via WhatsApp.'; errEl.classList.remove('hidden') }
    btn.disabled = false
    btn.textContent = 'Kirim Pesan'
    return
  }

  document.getElementById('kontakForm')?.classList.add('hidden')
  document.getElementById('formSuccess')?.classList.remove('hidden')
}

function resetForm() {
  document.getElementById('kontakForm')?.classList.remove('hidden')
  document.getElementById('formSuccess')?.classList.add('hidden')
  document.getElementById('formError')?.classList.add('hidden')
  clearFieldErrors('kontakForm')
  document.getElementById('kontakForm')?.reset()
  const btn = document.getElementById('btnKirim')
  if (btn) { btn.disabled = false; btn.textContent = 'Kirim Pesan' }
}

/* ═══════════════════════════════════════════
   INIT — index.html
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Only run on index.html (check for hero section)
  if (document.getElementById('beranda')) {
    loadKonten()
    loadLayanan()
    loadTim()
    loadKarirPreview()
  }
})
