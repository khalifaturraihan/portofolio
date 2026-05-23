import { display, mono } from '../themes'
import { EDUCATION, COURSES } from '../data'
import { SectionLabel, SectionWrap } from './shared'

export default function Education({ t }) {
  return (
    <SectionWrap id="education" t={t}>
      <div className="reveal">
        <SectionLabel t={t} label="education & courses" />
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 'clamp(30px,4.5vw,46px)', color: t.text, letterSpacing: '-1.5px', marginBottom: 44 }}>Education</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 50 }}>
        {EDUCATION.map((edu, i) => (
          <div key={i} className="reveal lift" style={{
            background: t.surface, border: `1px solid ${t.border}`,
            borderRadius: 14, padding: '24px 28px',
            display: 'flex', alignItems: 'flex-start', gap: 20,
            transitionDelay: `${i * 80}ms`,
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, background: t.accentDim, border: `1px solid ${t.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.accent, fontFamily: mono, fontSize: 14, fontWeight: 700 }}>0{i + 1}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: display, fontSize: 17, fontWeight: 600, color: t.text }}>{edu.institution}</h3>
              <p style={{ fontFamily: mono, fontSize: 12, color: t.accent, marginTop: 5 }}>{edu.degree}</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 5, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: mono, fontSize: 11, color: t.muted }}>{edu.period}</span>
                <span style={{ fontFamily: mono, fontSize: 11, color: t.muted }}>{edu.location}</span>
                {edu.note && <span style={{ fontFamily: mono, fontSize: 11, color: t.accentLt }}>{edu.note}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="reveal">
        <p style={{ fontFamily: mono, fontSize: 10, color: t.accent, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>// workshops & courses</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
        {COURSES.map((c, i) => (
          <div key={i} className="reveal lift" style={{
            background: t.surface, border: `1px solid ${t.border}`,
            borderRadius: 10, padding: '16px 18px',
            transitionDelay: `${i * 50}ms`,
          }}>
            <p style={{ fontSize: 13, color: t.text, fontWeight: 500, lineHeight: 1.5, marginBottom: 6 }}>{c.title}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: mono, fontSize: 10.5, color: t.muted }}>{c.provider}</span>
              <span style={{ fontFamily: mono, fontSize: 10, color: t.accent, background: t.tag, border: `1px solid ${t.tagBorder}`, padding: '2px 8px', borderRadius: 4 }}>{c.year}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrap>
  )
}
