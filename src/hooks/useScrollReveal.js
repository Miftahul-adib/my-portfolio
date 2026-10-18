import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children with reveal class
            const children = entry.target.querySelectorAll('.reveal')
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('visible')
              }, i * 100)
            })
            // Also reveal the container itself if it has the class
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('visible')
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
