import { useState } from 'react'
import { display, mono } from '../themes'
import { EXPERIENCE } from '../data'
import { SectionLabel, Tag, SectionWrap } from './shared'

export default function Experience({ t }) {
  const [open, setOpen] = useState(0)
  return (
    <SectionWrap id="experience" t={t}>
      <div className="reveal">
        <SectionLabel t={t} label="work experience" />
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 'clamp(30px,4.5vw,46px)', color: t.text, letterSpacing: '-1.5px', marginBottom: 48 }}>Experience</h2>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 18, top: 10, bottom: 10, width: 2, background: `linear-gradient(to bottom, ${t.accent}, ${t.border})` }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="reveal" style={{ display: 'flex', gap: 'clamp(16px,4vw,30px)', transitionDelay: `${i * 100}ms` }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0, zIndex: 1, marginTop: 2,
                background: i === 0 ? t.accent : t.bg,
                border: `2.5px solid ${i === 0 ? t.accent : t.borderHi}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: i === 0 ? `0 0 20px ${t.accent}66` : 'none',
              }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: i === 0 ? '#fff' : t.accent }} />
              </div>
              <div className="lift" style={{
                flex: 1, background: t.surface, border: `1px solid ${open === i ? t.accent + '55' : t.border}`,
                borderRadius: 14, padding: '24px 26px', cursor: 'pointer',
                boxShadow: open === i ? `0 10px 30px -10px ${t.accent}33` : 'none',
              }} onClick={() => setOpen(open === i ? -1 : i)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    {exp.current && (
                      <span style={{ fontFamily: mono, fontSize: 10, color: '#22c55e', background: '#22c55e12', border: '1px solid #22c55e28', padding: '2px 10px', borderRadius: 100, display: 'inline-block', marginBottom: 7 }}>● Current</span>
                    )}
                    <h3 style={{ fontFamily: display, fontSize: 18, fontWeight: 600, color: t.text }}>{exp.company}</h3>
                    <p style={{ fontFamily: mono, fontSize: 12, color: t.accent, marginTop: 4 }}>{exp.role}</p>
                    <p style={{ fontFamily: mono, fontSize: 11, color: t.muted, marginTop: 3 }}>{exp.location}</p>
                  </div>
                  <span style={{ fontFamily: mono, fontSize: 11, color: t.muted, background: t.surface2, border: `1px solid ${t.border}`, padding: '4px 14px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>{exp.period}</span>
                </div>
                <div style={{ maxHeight: open === i ? '1000px' : 0, overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
                  <ul style={{ marginTop: 18, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: t.sub, lineHeight: 1.7 }}>
                        <span style={{ color: t.accent, flexShrink: 0, marginTop: 3 }}>→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                  {exp.tags.map(tag => <Tag key={tag} t={t}>{tag}</Tag>)}
                </div>
                <p style={{ fontFamily: mono, fontSize: 10, color: t.muted, marginTop: 12, textAlign: 'right' }}>
                  {open === i ? '↑ collapse' : '↓ show details'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  )
}
