import React, { useEffect, useState } from 'react'
import './Hero.css'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const KaggleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z"/>
  </svg>
)

const ScholarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const PHRASE = "I'm easy to read unlike my code :)"

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let timeout
    if (phase === 'typing') {
      if (displayed.length < PHRASE.length) {
        timeout = setTimeout(() => setDisplayed(PHRASE.slice(0, displayed.length + 1)), 55)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 500)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
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
    <section className={`hero-split ${loaded ? 'hero-split--loaded' : ''}`} id="top">
      {/* LEFT PANEL */}
      <div className="hero-split__left">
        <div className="hero-split__left-inner">
          <div className="hero-split__photo-wrapper">
            <img
              src="/my-portfolio/profile.jpg"
              alt="Miftahul Alam Adib"
              className="hero-split__photo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hero-split__photo-fallback">MA</div>
          </div>

          <h1 className="hero-split__name">Miftahul Alam Adib</h1>
          <p className="hero-split__title">Statistics · ML · Research</p>

          <div className="hero-split__typewriter">
            <span>{displayed}</span>
            <span className="hero-split__cursor">|</span>
          </div>

          <div className="hero-split__socials">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="hero-split__social-link"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hero-split__right">
        <div className="hero-split__right-inner">
          <span className="hero-split__eyebrow">ABOUT</span>
          <h2 className="hero-split__section-title">Who I Am</h2>
          <p className="hero-split__body">
            I'm <strong>Miftahul Alam Adib</strong>, a Statistics undergraduate at Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh, and a Research Associate at Research Den (Remote, US). I sit at the boundary of statistical rigor and modern machine learning, drawn specifically to problems in healthcare AI and low-resource natural language processing. My work is shaped by a simple belief: that research is only as good as the populations it actually serves.
          </p>

          <h2 className="hero-split__section-title hero-split__section-title--spaced">Why Research</h2>
          <p className="hero-split__body">
            I love doing research. I think it's beautiful. I love when I see the patterns in the datasets and explore them. I love the puzzle of figuring out why a model fails, what the data is actually saying underneath the noise, and what it means when two variables behave in a way nobody expected. That curiosity is what keeps me here.
          </p>
          <p className="hero-split__body hero-split__body--spaced">
            Research, to me, is not confined to one domain. It is a way of asking honest questions with rigorous tools wherever the questions are worth asking. People ask me what my goal is, or whether I want a PhD. Honestly, I have no idea. I do research because I love it.
          </p>

          <div className="hero-split__scroll-hint">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M7 2L7 15M7 15L2 10M7 15L12 10" stroke="#4fc3f7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}
