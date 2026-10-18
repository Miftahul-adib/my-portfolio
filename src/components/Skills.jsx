import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const GROUPS = [
  {
    heading: 'ML & Deep Learning',
    accentColor: 'var(--accent-blue)',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'HuggingFace', 'YOLO', 'Whisper', 'LangChain', 'LangGraph', 'Keras'],
  },
  {
    heading: 'Data Analysis & Statistics',
    accentColor: 'var(--accent-magenta)',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Microsoft Excel', 'SPSS', 'Stata'],
  },
  {
    heading: 'Databases',
    accentColor: 'var(--accent-cyan)',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'FAISS Vector DB'],
  },
  {
    heading: 'Deployment & Web',
    accentColor: 'var(--accent-blue)',
    items: ['FastAPI', 'Streamlit', 'Pydantic', 'Docker', 'Render'],
  },
  {
    heading: 'Languages & Tools',
    accentColor: 'var(--accent-magenta)',
    items: ['Python', 'SQL', 'HTML5', 'Git', 'GitHub', 'Kaggle', 'Jupyter'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrapper" ref={ref}>
        <div className="reveal section-label">SKILLS</div>
        <h2 className="reveal section-heading">Technical Stack</h2>
        <p className="reveal section-intro">
          Tools and frameworks I work with, grouped by domain.
        </p>

        <div className="skills__groups">
          {GROUPS.map((g) => (
            <div key={g.heading} className="reveal skills__group-card">
              <h3
                className="skills__group-heading"
                style={{ color: g.accentColor }}
              >
                {g.heading}
              </h3>
              <div className="skills__pills">
                {g.items.map(item => (
                  <span key={item} className="skills__pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
