import { useState } from 'react'
import { mono, display } from '../themes'
import { useIsMobile } from '../hooks'

export default function Nav({ t, active }) {
  const links = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
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

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, width: 38, height: 38 }}
          >
            <span style={{ width: 22, height: 2, background: t.sub, borderRadius: 2, transition: 'transform 0.25s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: t.sub, borderRadius: 2, transition: 'opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: t.sub, borderRadius: 2, transition: 'transform 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        ) : (
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
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 62, left: 0, right: 0, bottom: 0,
          background: t.navBg, backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          zIndex: 998, display: 'flex', flexDirection: 'column',
          padding: '8px clamp(22px,5vw,48px)',
          borderTop: `1px solid ${t.border}`,
          overflowY: 'auto',
          animation: 'fade-in 0.2s ease both',
        }}>
          {links.map((id, i) => (
            <button key={id} onClick={() => go(id)} style={{
              background: 'none',
              color: active === id ? t.accent : t.sub,
              fontFamily: display, fontSize: 26,
              fontWeight: active === id ? 600 : 400,
              padding: '18px 0', borderRadius: 0,
              borderBottom: `1px solid ${t.border}`,
              textAlign: 'left', textTransform: 'capitalize',
              transition: 'color 0.2s',
              animation: `fade-up 0.3s ${i * 0.07}s ease both`,
            }}>{id}</button>
          ))}
        </div>
      )}
    </>
  )
}
