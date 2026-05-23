import { useState } from 'react'
import { display, mono } from '../themes'
import { PROJECTS } from '../data'
import { SectionLabel, Tag, SectionWrap } from './shared'
import { DiagramAviation, DiagramFinance, DiagramEgov, DiagramHris } from './Diagrams'

const diagrams = { aviation: DiagramAviation, finance: DiagramFinance, egov: DiagramEgov, hris: DiagramHris }

export default function Projects({ t }) {
  const [active, setActive] = useState(0)
  return (
    <SectionWrap id="projects" t={t} dark>
      <div className="reveal">
        <SectionLabel t={t} label="projects" />
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 'clamp(30px,4.5vw,46px)', color: t.text, letterSpacing: '-1.5px', marginBottom: 10 }}>Projects</h2>
        <p style={{ fontSize: 15, color: t.muted, lineHeight: 1.8, marginBottom: 36, maxWidth: 560 }}>Backend systems visualized through technical architecture diagrams.</p>
      </div>

      <div className="reveal" style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {PROJECTS.map((p, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            fontFamily: mono, fontSize: 11.5,
            padding: '8px 14px', borderRadius: 8,
            background: active === i ? t.accent : t.surface2,
            color: active === i ? '#fff' : t.sub,
            border: `1px solid ${active === i ? t.accent : t.border}`,
            transition: 'all 0.2s',
          }}>0{i + 1} · {p.title.split(' ')[0]}</button>
        ))}
      </div>

      {PROJECTS.map((proj, i) => {
        if (i !== active) return null
        const Diag = diagrams[proj.type]
        return (
          <div key={i} className="lift" style={{
            background: t.surface2, border: `1px solid ${t.border}`,
            borderRadius: 16, overflow: 'hidden',
            display: 'grid', gridTemplateColumns: '1fr 1.15fr',
            animation: 'fade-up 0.5s ease both',
          }}>
            <div style={{ padding: '30px 32px', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: mono, fontSize: 10, color: t.muted, marginBottom: 8 }}>{proj.company}</p>
              <h3 style={{ fontFamily: display, fontSize: 20, fontWeight: 600, color: t.text, marginBottom: 12, letterSpacing: '-0.5px' }}>{proj.title}</h3>
              <p style={{ fontSize: 13.5, color: t.sub, lineHeight: 1.8, flex: 1 }}>{proj.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                {proj.tech.map(tag => <Tag key={tag} t={t}>{tag}</Tag>)}
              </div>
            </div>
            <div style={{ borderLeft: `1px solid ${t.border}`, padding: '18px 14px', background: t.bg, display: 'flex', alignItems: 'center', minHeight: 220 }}>
              <Diag t={t} />
            </div>
          </div>
        )
      })}
    </SectionWrap>
  )
}
