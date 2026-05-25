import { useState } from 'react'
import { display, mono, serif } from '../themes'
import { SectionLabel, SectionWrap } from './shared'

export default function Contact({ t }) {
  const [copied, setCopied] = useState(false)
  return (
    <SectionWrap id="contact" t={t} dark>
      <div className="reveal" style={{ textAlign: 'center' }}>
        <SectionLabel t={t} label="contact" center />
        <h2 style={{ fontFamily: display, fontWeight: 700, fontSize: 'clamp(34px,5.5vw,60px)', color: t.text, letterSpacing: '-2px', marginBottom: 14 }}>
          Let's <span style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 400, color: t.accent }}>Collaborate</span>
        </h2>
        <p style={{ fontSize: 15.5, color: t.muted, lineHeight: 1.85, maxWidth: 460, margin: '0 auto 48px' }}>
          Have an interesting backend project or job opportunity? I'm always open to technical discussions.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => {
            navigator.clipboard.writeText('raihankhalifatur7@gmail.com').catch(() => {})
            setCopied(true); setTimeout(() => setCopied(false), 2400)
          }} className="lift" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: t.accent, color: '#fff',
            borderRadius: 10, padding: '15px 34px',
            fontFamily: mono, fontSize: 13, fontWeight: 500,
            boxShadow: `0 10px 30px -10px ${t.accent}66`,
          }}>
            {copied ? '✓ Copied!' : <><span style={{ display: 'inline' }}>✉ </span><span style={{ wordBreak: 'break-all' }}>raihankhalifatur7@gmail.com</span></>}
          </button>
          <a href="https://linkedin.com/in/khalifaturraihan" target="_blank" rel="noreferrer" className="lift" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: `1.5px solid ${t.border}`, color: t.sub,
            borderRadius: 10, padding: '14px 24px',
            fontFamily: mono, fontSize: 13,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={t.sub}>
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" fill={t.sub} />
            </svg>
            LinkedIn
          </a>
        </div>
        <div style={{ display: 'inline-flex', gap: 32, marginTop: 56, paddingTop: 30, borderTop: `1px solid ${t.border}`, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Tangerang Selatan, ID', '+62 851 5682 5375'].map(text => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: t.accent }} />
              <span style={{ fontFamily: mono, fontSize: 12, color: t.muted }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  )
}
