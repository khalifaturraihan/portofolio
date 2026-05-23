import { mono } from '../themes'

export default function Footer({ t }) {
  return (
    <footer style={{
      background: t.bg, borderTop: `1px solid ${t.border}`,
      padding: '24px clamp(22px,5vw,72px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
    }}>
      <span style={{ fontFamily: mono, fontSize: 12, color: t.muted }}>© 2025 Khalifatur Raihan</span>
      <span style={{ fontFamily: mono, fontSize: 11, color: t.muted }}>Java · Go · PHP · Spring Boot · Microservices</span>
    </footer>
  )
}
