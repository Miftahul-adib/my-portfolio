import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const GROUPS = [
  {
    heading: 'ML & Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'HuggingFace', 'YOLO', 'Whisper', 'LangChain', 'LangGraph', 'Keras'],
  },
  {
    heading: 'Data Analysis & Statistics',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Microsoft Excel', 'SPSS', 'Stata'],
  },
  {
    heading: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'FAISS Vector DB'],
  },
  {
    heading: 'Deployment & Web',
    items: ['FastAPI', 'Streamlit', 'Pydantic', 'Docker', 'Render'],
  },
  {
    heading: 'Languages & Tools',
    items: ['Python', 'SQL', 'HTML5', 'Git', 'GitHub', 'Kaggle', 'Jupyter'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="page-section skills-section">
      <div className="page-section__sidebar" />
      <div className="section-wrapper" ref={ref}>
        <span className="reveal section-label">Skills</span>

        <div className="skills__groups">
          {GROUPS.map((g) => (
            <div key={g.heading} className="reveal skills__group">
              <h3 className="skills__group-heading">{g.heading}</h3>
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
