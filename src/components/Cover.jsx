import React, { useEffect, useState } from 'react'
import './Cover.css'

export default function Cover() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="cover" id="top">
      {/* Background image */}
      <div className="cover__bg" />
      {/* Dark overlay */}
      <div className="cover__overlay" />

      {/* Center content */}
      <div className={`cover__content ${loaded ? 'cover__content--visible' : ''}`}>
        <div className="cover__photo-wrapper">
          <img
            src="/profile.jpeg"
            alt="Miftahul Alam Adib"
            className="cover__photo"
            onError={(e) => {
              // Fallback: show initials if image not found
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="cover__photo-fallback">MA</div>
        </div>

        <h1 className="cover__name">Miftahul Alam Adib</h1>
        <p className="cover__role">A Person</p>
      </div>

      {/* Scroll indicator */}
      <div className="cover__scroll-indicator">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2L8 18M8 18L2 12M8 18L14 12" stroke="#4fc3f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
