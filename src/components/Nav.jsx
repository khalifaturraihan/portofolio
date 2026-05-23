import { mono, display } from '../themes'

export default function Nav({ t, active }) {
  const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
  const go = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
  }
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, height: 62,
      background: t.navBg,
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: `1px solid ${t.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(22px,5vw,72px)',
      transition: 'background 0.35s, border-color 0.35s',
    }}>
      <span style={{ fontFamily: mono, fontSize: 14, fontWeight: 600, color: t.accent, letterSpacing: '-0.02em' }}>
        KR<span style={{ color: t.muted, fontWeight: 400 }}>.dev</span>
      </span>
      <div style={{ display: 'flex', gap: 2 }}>
        {links.map(id => (
          <button key={id} onClick={() => go(id)} style={{
            background: active === id ? t.accent + '1a' : 'none',
            color: active === id ? t.accent : t.sub,
            fontFamily: display, fontSize: 13,
            fontWeight: active === id ? 600 : 400,
            padding: '6px 14px', borderRadius: 6,
            transition: 'all 0.2s', textTransform: 'capitalize',
          }}>{id}</button>
        ))}
      </div>
    </nav>
  )
}
