import { useState, useEffect } from 'react'
import { THEMES } from './themes'
import { useReveal } from './hooks'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TweaksPanel from './components/TweaksPanel'

export default function App() {
  const [theme, setTheme] = useState('terminal')
  const [active, setActive] = useState('about')
  const t = THEMES[theme] || THEMES.terminal
  useReveal()

  useEffect(() => {
    const ids = ['about', 'skills', 'experience', 'projects', 'education', 'contact']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.22, rootMargin: '-62px 0px 0px 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ background: t.bg, minHeight: '100vh', transition: 'background 0.35s', color: t.text }}>
      <Nav t={t} active={active} />
      <Hero t={t} />
      <TechMarquee t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Education t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <TweaksPanel theme={theme} onChange={setTheme} />
    </div>
  )
}
