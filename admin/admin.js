/* ═══════════════════════════════════════════
   SUPABASE CONFIG
═══════════════════════════════════════════ */
const SUPABASE_URL = 'https://utmuwelyakuxdxokwhnl.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_2lOaSrEYxwgF3j6sktjnDQ_2oipXveR'
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function formatTanggal(d) {
  if (!d) return '-'
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function esc(str) {
  if (!str) return ''
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

function showToast(msg, type = 'success') {
  let toast = document.getElementById('adminToast')
  if (!toast) {
    toast = document.createElement('div')
    toast.id = 'adminToast'
    toast.className = 'toast'
    document.body.appendChild(toast)
  }
  const icon = type === 'success'
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
  toast.className = `toast ${type}`
  toast.innerHTML = icon + msg
  toast.classList.add('show')
  clearTimeout(toast._timer)
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000)
}

function confirmDel(msg) {
  return window.confirm(msg || 'Yakin ingin menghapus?')
}

function openModal(id)  { document.getElementById(id)?.classList.remove('hidden') }
function closeModal(id) { document.getElementById(id)?.classList.add('hidden') }

const ICONS = {
  Users:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Search:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  FileText:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  TrendingUp:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  Sparkles:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z"/></svg>`,
  Wrench:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  Car:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  Briefcase: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  Monitor:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  Settings:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  UserCheck: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
}

const STATUS_LAMARAN = {
  baru:     { label: 'Baru',     cls: 'badge-blue' },
  diproses: { label: 'Diproses', cls: 'badge-yellow' },
  diterima: { label: 'Diterima', cls: 'badge-green' },
  ditolak:  { label: 'Ditolak',  cls: 'badge-red' },
}
const STATUS_LOWONGAN = {
  aktif: { label: 'Aktif', cls: 'badge-green' },
  tutup: { label: 'Tutup', cls: 'badge-red' },
  draft: { label: 'Draft', cls: 'badge-gray' },
}

/* ═══════════════════════════════════════════
   AUTH GUARD
═══════════════════════════════════════════ */
async function checkAuth() {
  const isLogin = location.pathname.includes('login.html')
  const { data: { session } } = await sb.auth.getSession()

  if (!session && !isLogin) {
    location.href = 'login.html'
    return null
  }
  if (session && isLogin) {
    location.href = 'dashboard.html'
    return session
  }
  return session
}

async function handleLogout() {
  await sb.auth.signOut()
  location.href = 'login.html'
}

/* ═══════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════ */
function initSidebar(activePage) {
  const nav = [
    { href: 'dashboard.html', icon: 'layout', label: 'Dashboard' },
    {
      label: 'Kelola Konten', icon: 'file-edit', id: 'konten-group',
      children: [
        { href: 'konten.html', label: 'Hero, Tentang & Visi Misi' },
        { href: 'kontak.html', label: 'Info Kontak' },
      ]
    },
    { href: 'layanan.html', icon: 'wrench', label: 'Kelola Layanan' },
    { href: 'tim.html', icon: 'users', label: 'Kelola Tim' },
    { href: 'lowongan.html', icon: 'clipboard', label: 'Kelola Lowongan' },
    { href: 'lamaran.html', icon: 'file-text', label: 'Lihat Lamaran' },
  ]

  const icons = {
    layout: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    'file-edit': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    wrench: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    clipboard: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
    'file-text': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    logout: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    chevron: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
  }

  const kontenPages = ['konten.html', 'kontak.html']
  const isKonten = kontenPages.some(p => activePage.includes(p))

  let html = '<div class="sidebar-nav">'
  nav.forEach(item => {
    if (item.children) {
      const active = item.children.some(c => activePage.includes(c.href))
      html += `
        <button class="nav-group-btn ${isKonten ? 'active' : ''}" id="${item.id}">
          <span class="left">${icons[item.icon]}${item.label}</span>
          <span class="chevron ${isKonten ? 'open' : ''}">${icons.chevron}</span>
        </button>
        <div class="nav-children ${isKonten ? '' : 'hidden'}" id="${item.id}-children">
          ${item.children.map(c => `<a href="${c.href}" class="nav-child ${activePage.includes(c.href) ? 'active' : ''}">${c.label}</a>`).join('')}
        </div>
      `
    } else {
      html += `<a href="${item.href}" class="nav-item ${activePage.includes(item.href) ? 'active' : ''}">${icons[item.icon]}${item.label}</a>`
    }
  })
  html += '</div>'
  html += `<div class="sidebar-footer"><button class="btn-logout" onclick="handleLogout()">${icons.logout} Keluar</button></div>`

  document.getElementById('sidebar').innerHTML = html

  const groupBtn = document.getElementById('konten-group')
  if (groupBtn) {
    groupBtn.addEventListener('click', () => {
      const children = document.getElementById('konten-group-children')
      const chevron = groupBtn.querySelector('.chevron')
      children.classList.toggle('hidden')
      chevron.classList.toggle('open')
    })
  }
}

/* ═══════════════════════════════════════════
   ADMIN HEADER
═══════════════════════════════════════════ */
async function initAdminHeader() {
  const { data: { user } } = await sb.auth.getUser()
  const el = document.getElementById('adminHeaderRight')
  if (!el || !user) return
  const initial = (user.email || 'A')[0].toUpperCase()
  el.innerHTML = `
    <span class="header-email">${esc(user.email)}</span>
    <div class="header-avatar"><span>${initial}</span></div>
  `
}
