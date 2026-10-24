import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

const EDUCATION = [
  {
    degree: 'B.Sc. in Statistics',
    institution: 'Shahjalal University of Science and Technology',
    location: 'Sylhet, Bangladesh',
    period: 'Nov 2024 – Present',
  },
]

const EXPERIENCE = [
  {
    role: 'Research Associate',
    org: 'Research Den',
    location: 'Remote, United States',
    period: 'Aug 2025 – Present',
    desc: 'An AI/ML volunteer research community helping members publish in peer-reviewed conferences and journals through mentorship and collaboration.',
    bullets: [
      'Co-authored a research manuscript currently under review, contributing across data analysis, experimentation, and writing.',
      'Active contributor across multiple ongoing research projects, applying machine learning techniques across the full research pipeline.',
    ],
  },
  {
    role: 'Junior Python Mentor',
    org: 'SUST Data Science Club',
    location: 'Sylhet, Bangladesh',
    period: '',
    desc: '',
    bullets: [
      'Delivered in-person instruction for the 7-day "PyNEXT" course, guiding a cohort of 50 students through Python fundamentals and troubleshooting challenges.',
      "Provided one-on-one support to strengthen participants's programming skills, fostering an engaging and collaborative learning environment.",
    ],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="page-section">
      <div className="page-section__sidebar" />
      <div className="section-wrapper" ref={ref}>
        <span className="reveal section-label">Education</span>

        {EDUCATION.map((e) => (
          <div key={e.degree} className="reveal exp__row">
            <div className="exp__meta">
              <span className="exp__period">{e.period}</span>
            </div>
            <div className="exp__body">
              <h3 className="exp__title">{e.degree}</h3>
              <p className="exp__org">{e.institution}, {e.location}</p>
            </div>
          </div>
        ))}

        <span className="reveal section-label exp__section-gap">Experience</span>

        {EXPERIENCE.map((e) => (
          <div key={e.role} className="reveal exp__row">
            <div className="exp__meta">
              <span className="exp__period">{e.period}</span>
              <span className="exp__location">{e.location}</span>
            </div>
            <div className="exp__body">
              <h3 className="exp__title">{e.role}</h3>
              <p className="exp__org">{e.org}</p>
              {e.desc && <p className="exp__desc">{e.desc}</p>}
              <ul className="exp__bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
