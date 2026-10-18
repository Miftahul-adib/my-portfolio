import React, { useEffect, useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

// Social icon SVGs inline
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const KaggleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z"/>
  </svg>
)

const ScholarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const PHRASE = "I'm easy to read unlike my code :)"

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phase, setPhase] = useState('typing') // typing | pause | deleting
  const ref = useScrollReveal()

  useEffect(() => {
    let timeout

    if (phase === 'typing') {
      if (displayed.length < PHRASE.length) {
        timeout = setTimeout(() => {
          setDisplayed(PHRASE.slice(0, displayed.length + 1))
        }, 55)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 500)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 28)
      } else {
        timeout = setTimeout(() => setPhase('typing'), 400)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase])

  const socials = [
    { href: 'https://www.linkedin.com/in/miftahul-alam-adib/', Icon: LinkedInIcon, label: 'LinkedIn' },
    { href: 'https://github.com/Miftahul-adib', Icon: GitHubIcon, label: 'GitHub' },
    { href: 'https://www.kaggle.com/miftahuladib', Icon: KaggleIcon, label: 'Kaggle' },
    { href: 'https://scholar.google.com/citations?hl=en&user=3UH7xHsAAAAJ', Icon: ScholarIcon, label: 'Google Scholar' },
    { href: 'mailto:miftahuladib04@gmail.com', Icon: EmailIcon, label: 'Email' },
  ]

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__inner">
        <div className="reveal hero__typewriter">
          <span className="hero__text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>

        <div className="reveal hero__socials" style={{ transitionDelay: '0.4s' }}>
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="reveal hero__divider" style={{ transitionDelay: '0.6s' }} />
      </div>
    </section>
  )
}
