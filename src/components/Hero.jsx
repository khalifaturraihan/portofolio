import { useState, useEffect, useRef } from 'react'
import { mono, display, serif } from '../themes'
import { useCountUp } from '../hooks'
import profileImg from '/profile.png'

function StatNum({ t, val, suffix, label }) {
  const [n, ref] = useCountUp(val, 1500)
  return (
    <div ref={ref}>
      <div style={{ fontFamily: display, fontSize: 38, fontWeight: 700, color: t.accent, lineHeight: 1, letterSpacing: '-1.5px' }}>
        {n}{suffix}
      </div>
      <div style={{ fontSize: 12, color: t.muted, marginTop: 6, letterSpacing: '0.03em' }}>{label}</div>
    </div>
  )
}

function Stats({ t }) {
  const items = [
    { val: 3,   suffix: '+', label: 'Years Experience' },
    { val: 3,   suffix: '',  label: 'Companies' },
    { val: 12,  suffix: '+', label: 'Technologies' },
    { val: 100, suffix: '+', label: 'API Endpoints' },
  ]
  return (
    <div style={{
      display: 'flex', gap: 'clamp(24px,4vw,52px)', flexWrap: 'wrap',
      paddingTop: 30, borderTop: `1px solid ${t.border}`,
    }}>
      {items.map(s => <StatNum key={s.label} t={t} {...s} />)}
    </div>
  )
}

export default function Hero({ t }) {
  const words = ['Software Engineer', 'Java Developer', 'API Architect', 'Backend Specialist']
  const [wIdx, setWIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const heroRef = useRef(null)
  const photoRef = useRef(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const full = words[wIdx]
    let i = 0; setTyped(''); setIsTyping(true)
    const iv = setInterval(() => {
      i++
      setTyped(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(iv); setIsTyping(false)
        setTimeout(() => setWIdx(x => (x + 1) % words.length), 2600)
      }
    }, 55)
    return () => clearInterval(iv)
  }, [wIdx])

  useEffect(() => {
    const handler = (e) => {
      if (!heroRef.current) return
      const r = heroRef.current.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      setParallax({ x: (e.clientX - cx) / r.width, y: (e.clientY - cy) / r.height })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const orbitChips = [
    { label: 'Java',        c: t.accent,   rx: 215, ry: 60,  a: 350, s: 18 },
    { label: 'Spring Boot', c: t.accent2,  rx: 235, ry: 180, a: 45,  s: 22 },
    { label: 'Redis',       c: t.accent3,  rx: 200, ry: 200, a: 135, s: 20 },
    { label: 'Docker',      c: t.accentLt, rx: 230, ry: 60,  a: 195, s: 24 },
    { label: 'PostgreSQL',  c: t.accent2,  rx: 195, ry: 210, a: 260, s: 26 },
    { label: 'REST API',    c: t.accent,   rx: 220, ry: 180, a: 305, s: 19 },
  ]

  return (
    <section ref={heroRef} id="about" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '108px clamp(22px,5vw,72px) 80px',
      background: t.bg, position: 'relative', overflow: 'hidden',
      transition: 'background 0.35s',
      perspective: 1400,
    }}>
      {/* Blobs */}
      <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: 720, height: 720, borderRadius: '50%', background: `radial-gradient(circle, ${t.accent}22, transparent 60%)`, filter: 'blur(60px)', pointerEvents: 'none', animation: 'blob-drift-1 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: 640, height: 640, borderRadius: '50%', background: `radial-gradient(circle, ${t.accent3}18, transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none', animation: 'blob-drift-2 26s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '30%', right: '20%', width: 420, height: 420, borderRadius: '50%', background: `radial-gradient(circle, ${t.accent2}14, transparent 60%)`, filter: 'blur(70px)', pointerEvents: 'none', animation: 'blob-drift-1 30s ease-in-out infinite reverse' }} />

      {/* Grid */}
      <div className="hero-grid" style={{
        position: 'absolute', inset: 0, opacity: 0.55,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        pointerEvents: 'none',
        transform: `translate(${parallax.x * -15}px, ${parallax.y * -15}px)`,
        transition: 'transform 0.6s ease-out',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', position: 'relative', width: '100%',
        display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
        gap: 'clamp(24px,6vw,80px)', alignItems: 'center',
      }}>
        {/* LEFT */}
        <div style={{ animation: 'fade-up 0.8s ease both', animationDelay: '0.1s' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#22c55e0e', border: '1px solid #22c55e2a', borderRadius: 100, padding: '6px 18px', marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'status-pulse 2.2s infinite', flexShrink: 0 }} />
            <span style={{ fontFamily: mono, fontSize: 11.5, color: '#22c55e', letterSpacing: '0.06em' }}>Available for opportunities</span>
          </div>

          <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 22, color: t.muted, marginBottom: 6 }}>Hi, I am —</p>

          <h1 style={{ fontFamily: display, fontWeight: 700, fontSize: 'clamp(48px,7.5vw,92px)', color: t.text, lineHeight: 0.95, letterSpacing: '-3.5px', marginBottom: 18 }}>
            <span style={{ display: 'block', animation: 'title-letter 0.7s 0.2s both' }}>Khalifatur</span>
            <span style={{
              display: 'block',
              background: `linear-gradient(120deg, ${t.accent}, ${t.accent3}, ${t.accent2}, ${t.accent})`,
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent', color: 'transparent',
              animation: 'title-letter 0.7s 0.35s both, gradient-shift 7s ease-in-out infinite',
            }}>Raihan</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: mono, fontSize: 'clamp(13px,1.7vw,17px)', color: t.sub, marginBottom: 26, minHeight: '1.6em' }}>
            <span style={{ color: t.accent, opacity: .6 }}>&gt;_</span>
            <span>{typed}</span>
            <span style={{ width: 2.5, height: '1.1em', background: t.accent, display: 'inline-block', animation: isTyping ? 'none' : 'cursor-blink 0.9s step-end infinite' }} />
          </div>

          <p style={{ fontSize: 16, color: t.sub, lineHeight: 1.85, maxWidth: 520, marginBottom: 36 }}>
            Software engineer with <strong style={{ color: t.text, fontWeight: 600 }}>3+ years of professional experience</strong> specializing in backend development. Expert in <strong style={{ color: t.text, fontWeight: 600 }}>Java Spring Boot</strong>, building RESTful APIs, microservices, and enterprise integrations for <strong style={{ color: t.text, fontWeight: 600 }}>aviation</strong> and <strong style={{ color: t.text, fontWeight: 600 }}>government</strong> sectors.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 44 }}>
            <a href="mailto:raihankhalifatur7@gmail.com" className="lift" style={{ background: t.accent, color: '#fff', borderRadius: 8, padding: '13px 28px', fontFamily: display, fontWeight: 600, fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: `0 8px 28px ${t.accent}44`, whiteSpace: 'nowrap' }}>
              Hire Me <span style={{ fontSize: 16 }}>→</span>
            </a>
            <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="lift" style={{ border: `1.5px solid ${t.border}`, color: t.sub, borderRadius: 8, padding: '11px 20px', fontFamily: mono, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View Work
            </a>
          </div>

          <Stats t={t} />
        </div>

        {/* RIGHT — 3D photo */}
        <div style={{ position: 'relative', height: 'clamp(380px,55vw,560px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
          {/* Background frame layers */}
          <div style={{ position: 'absolute', width: 380, height: 480, transform: `translate3d(${parallax.x * 25}px, ${parallax.y * 25}px, -100px) rotateX(${-parallax.y * 8}deg) rotateY(${parallax.x * 8}deg)`, transition: 'transform 0.4s ease-out' }}>
            <div style={{ position: 'absolute', inset: -40, border: `1px solid ${t.accent}33`, borderRadius: 24, animation: 'pulse-ring 3.5s ease-out infinite' }} />
            <div style={{ position: 'absolute', inset: -40, border: `1px solid ${t.accent2}33`, borderRadius: 24, animation: 'pulse-ring 3.5s ease-out 1.2s infinite' }} />
            <div style={{ position: 'absolute', inset: -40, border: `1px solid ${t.accent3}33`, borderRadius: 24, animation: 'pulse-ring 3.5s ease-out 2.4s infinite' }} />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${t.accent}, ${t.accent3})`, borderRadius: 22, transform: 'translate(22px, 22px)', opacity: 0.85, animation: 'float-y-slow 6s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle, ${t.accent2}55 1.2px, transparent 1.3px)`, backgroundSize: '14px 14px', borderRadius: 22, transform: 'translate(-18px, -18px)', opacity: 0.7, animation: 'float-y 5s ease-in-out infinite' }} />
          </div>

          {/* Photo card */}
          <div ref={photoRef} className="photo-card" style={{
            position: 'relative', width: 360, height: 460,
            transform: `rotateX(${-parallax.y * 12}deg) rotateY(${parallax.x * 12}deg) translateZ(40px)`,
            transition: 'transform 0.4s ease-out',
            borderRadius: 24,
            background: `linear-gradient(160deg, ${t.surface2}, ${t.surface})`,
            border: `1.5px solid ${t.borderHi}`,
            boxShadow: `0 30px 80px -20px ${t.accent}55, 0 0 0 1px ${t.accent}22, inset 0 0 0 1px ${t.text}05`,
            overflow: 'hidden',
            animation: 'fade-up 1s 0.4s both, tilt-hover 8s ease-in-out 1s infinite',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top, ${t.accent}25, transparent 55%)`, pointerEvents: 'none', zIndex: 1 }} />

            <img src={profileImg} alt="Khalifatur Raihan" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%) scale(1.04)',
              height: '100%', width: 'auto',
              minWidth: '100%', minHeight: '100%',
              objectFit: 'cover', objectPosition: 'center 35%',
              filter: 'contrast(1.04) saturate(1.06)',
              pointerEvents: 'none', zIndex: 0,
            }} />

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 130, background: `linear-gradient(to top, ${t.bg}f0 5%, ${t.bg}99 40%, transparent)`, pointerEvents: 'none', zIndex: 2 }} />

            <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#fbbf24' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <span style={{ fontFamily: mono, fontSize: 9.5, color: t.muted, letterSpacing: '0.15em' }}>// PROFILE.exe</span>
            </div>

            <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14, background: t.surface + 'e6', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: `1px solid ${t.borderHi}`, borderRadius: 12, padding: '12px 14px', zIndex: 3 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontFamily: display, fontSize: 14, fontWeight: 600, color: t.text }}>Khalifatur Raihan</span>
                <span style={{ fontFamily: mono, fontSize: 9, color: '#22c55e', background: '#22c55e15', padding: '2px 8px', borderRadius: 100 }}>● online</span>
              </div>
              <p style={{ fontFamily: mono, fontSize: 10.5, color: t.muted, letterSpacing: '0.05em' }}>Backend Engineer · ID</p>
            </div>

            <svg style={{ position: 'absolute', top: 50, right: 14, opacity: 0.4, zIndex: 2 }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M2 2L18 2L18 18" stroke={t.accent} strokeWidth="1" fill="none" />
              <circle cx="18" cy="2" r="2" fill={t.accent} />
            </svg>
          </div>

          {/* Orbit chips */}
          {orbitChips.map((chip, idx) => {
            const angle = (chip.a * Math.PI) / 180
            const x = Math.cos(angle) * chip.rx
            const y = Math.sin(angle) * chip.ry
            return (
              <div key={chip.label} className="tech-chip" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) translateZ(60px)`,
                background: t.surface + 'dd',
                border: `1px solid ${chip.c}55`,
                borderRadius: 100, padding: '7px 14px',
                fontFamily: mono, fontSize: 11, fontWeight: 500, color: chip.c,
                boxShadow: `0 8px 24px -8px ${chip.c}44, 0 0 0 1px ${chip.c}22`,
                animation: `magnet-pop 0.6s ${0.6 + idx * 0.12}s both, float-y ${chip.s / 4}s ease-in-out ${idx * 0.5}s infinite`,
                whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6,
                cursor: 'default', zIndex: 4,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: chip.c }} />
                {chip.label}
              </div>
            )
          })}

          {/* Decorative shapes */}
          <div style={{ position: 'absolute', top: '8%', left: '8%', width: 60, height: 60, border: `2px solid ${t.accent2}66`, borderRadius: 12, transform: `rotate(15deg) translateZ(20px) translate(${parallax.x * -30}px, ${parallax.y * -30}px)`, transition: 'transform 0.4s ease-out', animation: 'spin-slow 20s linear infinite' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 0, height: 0, borderLeft: '26px solid transparent', borderRight: '26px solid transparent', borderBottom: `44px solid ${t.accent3}55`, transform: `translateZ(20px) translate(${parallax.x * 40}px, ${parallax.y * 40}px)`, transition: 'transform 0.4s ease-out', animation: 'float-y-slow 4s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '55%', right: '3%', width: 18, height: 18, borderRadius: '50%', background: t.accent, boxShadow: `0 0 30px ${t.accent}`, transform: `translateZ(30px) translate(${parallax.x * 20}px, ${parallax.y * 20}px)`, transition: 'transform 0.4s ease-out' }} />
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'fade-in 1s 1.5s both' }}>
        <span style={{ fontFamily: mono, fontSize: 9.5, color: t.muted, letterSpacing: '0.25em' }}>SCROLL</span>
        <div style={{ width: 1.5, height: 28, background: `linear-gradient(to bottom, ${t.accent}, transparent)`, animation: 'float-y 1.6s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
