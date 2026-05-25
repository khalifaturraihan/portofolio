import { mono, display } from '../themes'

export function SectionLabel({ t, label, center }) {
  return (
    <p style={{
      fontFamily: mono, fontSize: 11, color: t.accent,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      marginBottom: 14, textAlign: center ? 'center' : 'left',
    }}>{'// ' + label}</p>
  )
}

export function Tag({ t, children }) {
  return (
    <span style={{
      fontFamily: mono, fontSize: 11, color: t.accentLt,
      background: t.tag, border: `1px solid ${t.tagBorder}`,
      padding: '4px 11px', borderRadius: 5,
    }}>{children}</span>
  )
}

export function SectionWrap({ id, t, dark, children }) {
  return (
    <section id={id} style={{
      padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,72px)',
      background: dark ? t.surface : t.bg,
      borderTop: `1px solid ${t.border}`,
      transition: 'background 0.35s, border-color 0.35s',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
        {children}
      </div>
    </section>
  )
}
