export const SKILLS = [
  { label: 'Languages',    items: ['Java', 'Go', 'PHP', 'Python', 'JavaScript'] },
  { label: 'Frameworks',   items: ['Spring Boot', 'Hibernate/JPA', 'Laravel', 'Odoo', 'Flask'] },
  { label: 'Databases',    items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { label: 'DevOps',       items: ['Git', 'Maven', 'Docker', 'Postman', 'CI/CD'] },
  { label: 'Architecture', items: ['REST API', 'Microservices', 'Payment Gateway', 'Message Queue'] },
]

export const EXPERIENCE = [
  {
    company: 'PT Aero System Indonesia',
    role: 'Software Engineer — Java Developer',
    period: 'Dec 2023 – Present',
    location: 'Tangerang, Indonesia',
    current: true,
    bullets: [
      'Designed & maintained RESTful APIs using Java Spring Boot for middleware and enterprise applications.',
      'Implemented microservices architecture, improving scalability across multiple production projects.',
      'Integrated Midtrans payment gateway and built payment landing pages for online ticket booking.',
      'Developed API connections for flight booking, order management & third-party service integrations.',
      'Built financial systems including corporate investment & pension fund (Dana Pensiun) management.',
      'Applied Redis caching & queuing solutions to handle high-volume requests efficiently.',
      'Conducted code reviews, unit testing, and applied CI/CD best practices.',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'Redis', 'Midtrans', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'General Secretariat of the Indonesian House of Representatives (DPR RI)',
    role: 'Back End Programmer — Intern',
    period: 'Aug 2022 – Dec 2022',
    location: 'Jakarta, Indonesia',
    current: false,
    bullets: [
      'Developed custom services to manage application state and communicate with back-end APIs.',
      'Built RESTful APIs for secure, efficient data transfer between front-end and back-end systems.',
      'Deployed APIs integrating front-end application with back-end services for 2 project launches.',
    ],
    tags: ['PHP', 'Laravel', 'REST API', 'MySQL', 'JWT'],
  },
  {
    company: 'PT Kebun Maju Bersama',
    role: 'IT Support',
    period: '2021 – 2023',
    location: 'Tangerang Selatan, Indonesia',
    current: false,
    bullets: [
      'Installed and configured OS, software, networks & hardware — 20% increase in system performance.',
      'Developed a customer service portal for service request logging and support material access.',
      'Identified and resolved configuration errors that decreased system downtime by 10%.',
    ],
    tags: ['Windows Server', 'Networking', 'Hardware', 'Troubleshooting'],
  },
]

export const PROJECTS = [
  {
    title: 'HRIS Management System',
    company: 'Internal Project',
    desc: 'Modern HR Information System for employee management, attendance tracking, leave requests, and payroll. Built with a Go backend using templ for server-rendered components, HTMX for partial updates, and Alpine.js for client interactivity — delivering a snappy SPA-like UX without a heavy SPA framework.',
    tech: ['Golang', 'templ', 'HTMX', 'Alpine.js', 'PostgreSQL', 'Tailwind'],
    type: 'hris',
  },
  {
    title: 'Aviation Booking & Middleware API',
    company: 'PT Aero System Indonesia',
    desc: 'Enterprise middleware platform for flight booking, seat management, and order processing. Integrates with airline GDS systems and handles real-time transaction workflows at scale.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Midtrans'],
    type: 'aviation',
  },
  {
    title: 'Pension Fund Management System',
    company: 'PT Aero System Indonesia',
    desc: 'Corporate financial platform for investment portfolio tracking and pension fund management. Provides secure REST endpoints for fund calculations, reporting, and employee data management.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JPA'],
    type: 'finance',
  },
  {
    title: 'Parliament Information System',
    company: 'General Secretariat of the Indonesian House of Representatives',
    desc: 'Internal information system for the Indonesian parliament — provides REST APIs for legislative data management, document archival, and activity reporting across departments.',
    tech: ['PHP', 'Laravel', 'MySQL', 'JWT Auth', 'REST API'],
    type: 'egov',
  },
]

export const EDUCATION = [
  {
    degree: 'Bachelor of Engineering — Informatics Engineering',
    institution: 'Universitas Gunadarma',
    period: '2019 – 2023',
    location: 'Depok, Indonesia',
    note: 'GPA: 3.74 / 4.0',
  },
  {
    degree: 'Senior High School — Science (IPA)',
    institution: 'SMAN 6 Kota Tangerang Selatan',
    period: '2016 – 2019',
    location: 'Tangerang Selatan, Indonesia',
    note: '',
  },
]

export const COURSES = [
  { title: 'Go-Lang Programming: Beginner to Advanced', provider: 'Udemy', year: '2023' },
  { title: 'Data Science Complete Bootcamp', provider: 'Udemy', year: '2023' },
  { title: 'Complete Web Development 2023 Bootcamp', provider: 'Udemy', year: '2023' },
  { title: 'Cyber Novice — Ethical Hacking', provider: 'Digitalent × EC-Council', year: '2023' },
  { title: 'JavaScript Programming Fundamentals', provider: 'Universitas Gunadarma', year: '2022' },
  { title: 'HTML & CSS', provider: 'Progate', year: '2022' },
]
