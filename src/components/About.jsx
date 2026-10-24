import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const FACTS = [
  { label: 'Location', value: 'Sylhet, Bangladesh' },
  { label: 'Affiliation', value: 'Shahjalal University of Science and Technology' },
  { label: 'Position', value: 'Research Associate, Research Den (Remote, US)' },
  { label: 'Completed Papers', value: '3' },
  { label: 'Ongoing Research', value: '5' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="about-section">
      <div
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(79,195,247,0.04) 0%, transparent 70%)',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="section-wrapper" ref={ref}>
        <div className="reveal section-label">ABOUT</div>
        <h2 className="reveal section-heading">More About Me</h2>

        <div className="reveal about__facts-wrapper">
          <div className="about__facts-card">
            {FACTS.map((f, i) => (
              <div key={f.label} className={`about__fact-row ${i < FACTS.length - 1 ? 'about__fact-row--bordered' : ''}`}>
                <span className="about__fact-label">{f.label}</span>
                <span className="about__fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
