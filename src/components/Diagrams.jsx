const ar = (id, fill) => (
  <marker key={id} id={id} markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
    <path d="M0,0 L0,6 L6,3 z" fill={fill} />
  </marker>
)

export function DiagramAviation({ t }) {
  const { accent: c, surface2: s, border: b, text: tx, muted: m } = t
  return (
    <svg viewBox="0 0 520 190" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>{ar('a1', c)}{ar('a2', b)}</defs>
      <rect x="6" y="72" width="74" height="46" rx="7" fill={s} stroke={b} />
      <text x="43" y="91" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Client</text>
      <text x="43" y="106" textAnchor="middle" fill={m} fontSize="7.5">Mobile/Web</text>
      <line x1="82" y1="95" x2="114" y2="95" stroke={c} strokeWidth="1.5" markerEnd="url(#a1)" />
      <rect x="116" y="52" width="112" height="86" rx="9" fill={c} fillOpacity=".1" stroke={c} strokeWidth="1.5" />
      <text x="172" y="76" textAnchor="middle" fill={c} fontSize="10.5" fontFamily="monospace" fontWeight="600">API Gateway</text>
      <text x="172" y="92" textAnchor="middle" fill={m} fontSize="8">Spring Boot</text>
      <text x="172" y="107" textAnchor="middle" fill={m} fontSize="8">JWT · Rate Limit</text>
      <text x="172" y="122" textAnchor="middle" fill={m} fontSize="8">Logging</text>
      <line x1="230" y1="80" x2="264" y2="62" stroke={c} strokeWidth="1.2" markerEnd="url(#a1)" />
      <line x1="230" y1="110" x2="264" y2="128" stroke={c} strokeWidth="1.2" markerEnd="url(#a1)" />
      <rect x="266" y="42" width="100" height="38" rx="6" fill={s} stroke={b} />
      <text x="316" y="58" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Flight Service</text>
      <text x="316" y="71" textAnchor="middle" fill={m} fontSize="7.5">Booking · Scheduling</text>
      <rect x="266" y="110" width="100" height="38" rx="6" fill={s} stroke={b} />
      <text x="316" y="126" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Payment Svc</text>
      <text x="316" y="139" textAnchor="middle" fill={m} fontSize="7.5">Midtrans Gateway</text>
      <line x1="368" y1="62" x2="400" y2="90" stroke={b} strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#a2)" />
      <line x1="368" y1="130" x2="400" y2="104" stroke={b} strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#a2)" />
      <rect x="402" y="78" width="82" height="38" rx="6" fill={s} stroke={b} />
      <text x="443" y="94" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">PostgreSQL</text>
      <text x="443" y="107" textAnchor="middle" fill={m} fontSize="7.5">Production DB</text>
      <rect x="270" y="6" width="68" height="24" rx="4" fill={s} stroke={b} />
      <text x="304" y="16" textAnchor="middle" fill={tx} fontSize="8" fontFamily="monospace">Redis</text>
      <text x="304" y="25" textAnchor="middle" fill={m} fontSize="7">Cache / Queue</text>
      <line x1="316" y1="42" x2="316" y2="32" stroke={b} strokeWidth="1" strokeDasharray="2,2" />
      <rect x="370" y="148" width="70" height="20" rx="3" fill={c} fillOpacity=".15" stroke={c} strokeOpacity=".4" />
      <text x="405" y="161" textAnchor="middle" fill={c} fontSize="8" fontFamily="monospace">Midtrans</text>
      <line x1="366" y1="130" x2="405" y2="148" stroke={c} strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  )
}

export function DiagramFinance({ t }) {
  const { accent: c, surface2: s, border: b, text: tx, muted: m } = t
  return (
    <svg viewBox="0 0 520 190" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>{ar('f1', c)}{ar('f2', b)}</defs>
      <rect x="6" y="68" width="76" height="44" rx="7" fill={s} stroke={b} />
      <rect x="6" y="68" width="76" height="14" rx="7" fill={b} />
      <circle cx="16" cy="75" r="2.5" fill={m} fillOpacity=".5" />
      <circle cx="24" cy="75" r="2.5" fill={m} fillOpacity=".5" />
      <text x="44" y="98" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Web Client</text>
      <text x="44" y="108" textAnchor="middle" fill={m} fontSize="7.5">Dashboard</text>
      <line x1="84" y1="90" x2="114" y2="90" stroke={c} strokeWidth="1.5" markerEnd="url(#f1)" />
      <rect x="116" y="42" width="118" height="96" rx="9" fill={c} fillOpacity=".1" stroke={c} strokeWidth="1.5" />
      <text x="175" y="66" textAnchor="middle" fill={c} fontSize="10.5" fontFamily="monospace" fontWeight="600">Spring Boot</text>
      <text x="175" y="82" textAnchor="middle" fill={m} fontSize="8">Spring Security</text>
      <text x="175" y="97" textAnchor="middle" fill={m} fontSize="8">JPA / Hibernate</text>
      <text x="175" y="112" textAnchor="middle" fill={m} fontSize="8">REST Controller</text>
      <text x="175" y="127" textAnchor="middle" fill={m} fontSize="8">Service Layer</text>
      <line x1="236" y1="72" x2="268" y2="58" stroke={c} strokeWidth="1.2" markerEnd="url(#f1)" />
      <line x1="236" y1="108" x2="268" y2="122" stroke={c} strokeWidth="1.2" markerEnd="url(#f1)" />
      <rect x="270" y="38" width="106" height="38" rx="6" fill={s} stroke={b} />
      <text x="323" y="55" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Fund Management</text>
      <text x="323" y="68" textAnchor="middle" fill={m} fontSize="7.5">Invest · Pension Fund</text>
      <rect x="270" y="104" width="106" height="38" rx="6" fill={s} stroke={b} />
      <text x="323" y="121" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Employee Module</text>
      <text x="323" y="134" textAnchor="middle" fill={m} fontSize="7.5">CRUD · Reporting</text>
      <line x1="378" y1="58" x2="406" y2="88" stroke={b} strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#f2)" />
      <line x1="378" y1="122" x2="406" y2="98" stroke={b} strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#f2)" />
      <rect x="408" y="76" width="88" height="38" rx="6" fill={s} stroke={b} />
      <text x="452" y="92" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">PostgreSQL</text>
      <text x="452" y="105" textAnchor="middle" fill={m} fontSize="7.5">Financial DB</text>
      <rect x="408" y="6" width="88" height="24" rx="4" fill={s} stroke={b} />
      <text x="452" y="17" textAnchor="middle" fill={tx} fontSize="8" fontFamily="monospace">Spring Security</text>
      <text x="452" y="26" textAnchor="middle" fill={m} fontSize="7">JWT · Role Auth</text>
      <line x1="452" y1="76" x2="452" y2="32" stroke={b} strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  )
}

export function DiagramEgov({ t }) {
  const { accent: c, surface2: s, border: b, text: tx, muted: m } = t
  return (
    <svg viewBox="0 0 520 190" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>{ar('e1', c)}{ar('e2', b)}</defs>
      <rect x="6" y="64" width="80" height="52" rx="7" fill={s} stroke={b} />
      <rect x="6" y="64" width="80" height="15" rx="7" fill={b} />
      <circle cx="17" cy="71.5" r="2.5" fill={m} fillOpacity=".5" />
      <circle cx="26" cy="71.5" r="2.5" fill={m} fillOpacity=".5" />
      <text x="46" y="99" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Browser</text>
      <text x="46" y="111" textAnchor="middle" fill={m} fontSize="7.5">User Request</text>
      <line x1="88" y1="90" x2="116" y2="90" stroke={c} strokeWidth="1.5" markerEnd="url(#e1)" />
      <rect x="118" y="40" width="120" height="100" rx="9" fill={c} fillOpacity=".1" stroke={c} strokeWidth="1.5" />
      <text x="178" y="65" textAnchor="middle" fill={c} fontSize="10.5" fontFamily="monospace" fontWeight="600">Laravel</text>
      <text x="178" y="82" textAnchor="middle" fill={m} fontSize="8">Route · Controller</text>
      <text x="178" y="97" textAnchor="middle" fill={m} fontSize="8">Middleware · Auth</text>
      <text x="178" y="112" textAnchor="middle" fill={m} fontSize="8">Eloquent ORM</text>
      <text x="178" y="127" textAnchor="middle" fill={m} fontSize="8">REST Endpoint</text>
      <line x1="240" y1="70" x2="272" y2="55" stroke={c} strokeWidth="1.2" markerEnd="url(#e1)" />
      <line x1="240" y1="112" x2="272" y2="128" stroke={c} strokeWidth="1.2" markerEnd="url(#e1)" />
      <rect x="274" y="36" width="102" height="38" rx="6" fill={s} stroke={b} />
      <text x="325" y="53" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">MySQL</text>
      <text x="325" y="66" textAnchor="middle" fill={m} fontSize="7.5">Legislative Data</text>
      <rect x="274" y="110" width="102" height="38" rx="6" fill={s} stroke={b} />
      <text x="325" y="127" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">File Storage</text>
      <text x="325" y="140" textAnchor="middle" fill={m} fontSize="7.5">Documents / PDF</text>
      <rect x="396" y="36" width="88" height="38" rx="5" fill={s} stroke={b} />
      <text x="440" y="53" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">JWT Auth</text>
      <text x="440" y="66" textAnchor="middle" fill={m} fontSize="7.5">Token Service</text>
      <line x1="378" y1="56" x2="394" y2="56" stroke={b} strokeWidth="1" strokeDasharray="2,2" markerEnd="url(#e2)" />
      <rect x="130" y="8" width="64" height="18" rx="3" fill={c} />
      <text x="162" y="20" textAnchor="middle" fill="#fff" fontSize="8.5" fontFamily="monospace">REST API</text>
    </svg>
  )
}

export function DiagramHris({ t }) {
  const { accent: c, accent2: c2, surface2: s, border: b, text: tx, muted: m } = t
  return (
    <svg viewBox="0 0 520 190" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>{ar('h1', c)}{ar('h2', c2)}{ar('h3', b)}</defs>
      <rect x="6" y="64" width="82" height="52" rx="7" fill={s} stroke={b} />
      <rect x="6" y="64" width="82" height="15" rx="7" fill={b} />
      <circle cx="17" cy="71.5" r="2.5" fill={m} fillOpacity=".5" />
      <circle cx="26" cy="71.5" r="2.5" fill={m} fillOpacity=".5" />
      <text x="47" y="96" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">Browser</text>
      <text x="47" y="108" textAnchor="middle" fill={c2} fontSize="7.5">HTMX + Alpine</text>
      <line x1="90" y1="82" x2="118" y2="82" stroke={c} strokeWidth="1.5" markerEnd="url(#h1)" />
      <text x="104" y="77" textAnchor="middle" fill={c} fontSize="6.5" fontFamily="monospace">hx-get</text>
      <line x1="118" y1="100" x2="90" y2="100" stroke={c2} strokeWidth="1.5" markerEnd="url(#h2)" />
      <text x="104" y="112" textAnchor="middle" fill={c2} fontSize="6.5" fontFamily="monospace">HTML frag</text>
      <rect x="120" y="42" width="126" height="100" rx="9" fill={c} fillOpacity=".1" stroke={c} strokeWidth="1.5" />
      <text x="183" y="64" textAnchor="middle" fill={c} fontSize="10.5" fontFamily="monospace" fontWeight="600">Go Server</text>
      <text x="183" y="80" textAnchor="middle" fill={m} fontSize="8">chi / echo router</text>
      <text x="183" y="94" textAnchor="middle" fill={m} fontSize="8">Handler · Middleware</text>
      <text x="183" y="108" textAnchor="middle" fill={m} fontSize="8">templ.Render()</text>
      <text x="183" y="122" textAnchor="middle" fill={m} fontSize="8">Repository Layer</text>
      <line x1="248" y1="68" x2="280" y2="54" stroke={c} strokeWidth="1.2" markerEnd="url(#h1)" />
      <line x1="248" y1="118" x2="280" y2="130" stroke={c} strokeWidth="1.2" markerEnd="url(#h1)" />
      <rect x="282" y="36" width="104" height="38" rx="6" fill={s} stroke={b} />
      <text x="334" y="53" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">templ Components</text>
      <text x="334" y="66" textAnchor="middle" fill={m} fontSize="7.5">Type-safe templates</text>
      <rect x="282" y="112" width="104" height="38" rx="6" fill={s} stroke={b} />
      <text x="334" y="129" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">HR Modules</text>
      <text x="334" y="142" textAnchor="middle" fill={m} fontSize="7.5">Attendance · Payroll</text>
      <line x1="388" y1="130" x2="410" y2="104" stroke={b} strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#h3)" />
      <rect x="412" y="80" width="88" height="38" rx="6" fill={s} stroke={b} />
      <text x="456" y="96" textAnchor="middle" fill={tx} fontSize="9" fontFamily="monospace">PostgreSQL</text>
      <text x="456" y="109" textAnchor="middle" fill={m} fontSize="7.5">HR Database</text>
      <rect x="410" y="36" width="94" height="24" rx="4" fill={c2} fillOpacity=".15" stroke={c2} strokeOpacity=".4" />
      <text x="457" y="47" textAnchor="middle" fill={c2} fontSize="8" fontFamily="monospace">Alpine.js</text>
      <text x="457" y="56" textAnchor="middle" fill={m} fontSize="7">x-data · x-show</text>
      <line x1="386" y1="50" x2="408" y2="50" stroke={b} strokeWidth="1" strokeDasharray="2,2" />
      <rect x="6" y="8" width="108" height="18" rx="3" fill={c} />
      <text x="60" y="20" textAnchor="middle" fill="#fff" fontSize="8.5" fontFamily="monospace">Go + HTMX Stack</text>
    </svg>
  )
}
