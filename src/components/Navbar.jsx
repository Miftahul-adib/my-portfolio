import React, { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'ABOUT', href: '#top' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'COMPETITIONS', href: '#competitions' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [appeared, setAppeared] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 300) {
        if (!appeared) {
          setVisible(true)
          setAppeared(true)
        }
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [appeared])

  useEffect(() => {
    const ids = ['top', 'research', 'projects', 'competitions', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : ''}`}>
      <div className="navbar__inner">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace('#', '')
          return (
            <a
              key={label}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
            >
              {label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
