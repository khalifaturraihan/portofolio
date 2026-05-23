import { useState, useEffect, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useCountUp(target, duration = 1400, start = 0) {
  const [val, setVal] = useState(start)
  const ref = useRef(null)
  useEffect(() => {
    let raf, t0
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const step = (ts) => {
          if (!t0) t0 = ts
          const p = Math.min(1, (ts - t0) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(start + (target - start) * eased))
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => { obs.disconnect(); if (raf) cancelAnimationFrame(raf) }
  }, [target, duration, start])
  return [val, ref]
}
