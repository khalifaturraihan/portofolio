import { display, mono } from '../themes'
import { SKILLS } from '../data'
import { SectionLabel, Tag, SectionWrap } from './shared'

export default function Skills({ t }) {
  return (
    <SectionWrap id="skills" t={t} dark>
      <div className="reveal">
        <SectionLabel t={t} label="tech stack" />
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 'clamp(30px,4.5vw,46px)', color: t.text, letterSpacing: '-1.5px', marginBottom: 10 }}>Skills & Tools</h2>
        <p style={{ fontSize: 15, color: t.muted, lineHeight: 1.8, marginBottom: 44, maxWidth: 560 }}>Technologies I use to build robust and scalable backend systems.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
        {SKILLS.map(({ label, items }, idx) => (
          <div key={label} className="reveal lift" style={{
            background: t.surface2, border: `1px solid ${t.border}`,
            borderRadius: 14, padding: '22px 24px',
            transitionDelay: `${idx * 60}ms`,
            position: 'relative', overflow: 'hidden',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent + '55'; e.currentTarget.style.boxShadow = `0 10px 30px -10px ${t.accent}33` }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = 'none' }}
          >
            <p style={{ fontFamily: mono, fontSize: 10, color: t.accent, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>{label}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {items.map(item => <Tag key={item} t={t}>{item}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </SectionWrap>
  )
}
