import { mono } from '../themes'

export default function TechMarquee({ t }) {
  const items = ['Java', 'Spring Boot', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Microservices', 'REST API', 'Laravel', 'Python', 'JWT', 'Midtrans', 'CI/CD', 'Hibernate']
  return (
    <div style={{ borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`, background: t.bg, overflow: 'hidden', padding: '18px 0' }}>
      <div className="marquee">
        {[...items, ...items].map((it, i) => (
          <span key={i} style={{ fontFamily: mono, fontSize: 14, color: t.muted, padding: '0 28px', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: 28 }}>
            {it}
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: t.accent + '88' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
