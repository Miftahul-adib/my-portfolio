import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const PROJECTS = [
  {
    category: 'Tools & Systems',
    featured: true,
    name: 'ScholarLink — Faculty Finder',
    desc: 'Semantic search platform enabling students to discover faculty and PhD researchers at SUST using natural language queries. 611+ faculty profiles indexed with vector embeddings.',
    tech: ['FastAPI', 'FAISS', 'HuggingFace', 'Python', 'Vercel'],
    live: 'https://faculty-finder-phi.vercel.app/',
    code: 'https://github.com/Miftahul-adib/Faculty-finder',
  },
  {
    category: 'Healthcare',
    name: 'Blood Glucose Prediction on OhioT1DM',
    desc: '30-minute-ahead CGM forecasting using ensemble machine learning on the OhioT1DM dataset, with full SHAP and LIME explainability to surface which features drive each prediction.',
    tech: ['Scikit-learn', 'SHAP', 'LIME', 'Pandas', 'Matplotlib'],
    code: 'https://github.com/Miftahul-adib/Blood-Glucose-Prediction-on-OhioT1DM',
  },
  {
    category: 'NLP',
    name: 'Bengali LLM Hallucination Detection',
    desc: 'System for identifying unsupported or fabricated outputs in Bengali large language models — a reliability problem with direct implications for deploying LLMs in low-resource settings.',
    tech: ['NLP', 'Bengali', 'LLM', 'Python'],
    code: 'https://github.com/Miftahul-adib/Bengali-LLM-Hallucination-Detection-Challenge',
  },
  {
    category: 'NLP',
    name: 'Bengali Long-Form Speech & Speaker Diarization',
    desc: 'End-to-end pipeline for recognizing long-form Bengali speech and identifying individual speakers in multi-speaker audio recordings.',
    tech: ['Whisper', 'NLP', 'Speech', 'Diarization', 'PyTorch'],
    code: 'https://github.com/Miftahul-adib/Bengali-Long-Form-Speech-Recognition-Speaker-Diarization',
  },
  {
    category: 'Tools & Systems',
    name: 'Retrieval-Augmented QA System',
    desc: 'RAG pipeline combining FAISS vector search for document retrieval with TAPAS for answering questions over tabular data.',
    tech: ['FAISS', 'TAPAS', 'LangChain', 'Python'],
    code: 'https://github.com/Miftahul-adib/Retrieval-Augmented-QA-System',
  },
  {
    category: 'Computer Vision',
    name: 'Roadside Object Detection',
    desc: 'Real-time multi-class roadside object detection using YOLOv11n with a custom training pipeline, optimized for Bangladeshi road conditions.',
    tech: ['YOLOv11', 'OpenCV', 'PyTorch', 'Computer Vision'],
    code: 'https://github.com/Miftahul-adib/Roadside-object-detection',
  },
  {
    category: 'Tools & Systems',
    name: 'YouTube Data Analysis',
    desc: 'Exploratory data analysis of the top 100 YouTube channels — subscriber trends, category distributions, and engagement patterns using Pandas, Matplotlib, and Seaborn.',
    tech: ['Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    code: 'https://github.com/Miftahul-adib/Youtube-data-analysis',
  },
]

const FILTERS = ['All', 'NLP', 'Healthcare', 'Computer Vision', 'Tools & Systems']

export default function Projects() {
  const [active, setActive] = useState('All')
  const ref = useScrollReveal()

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="projects" className="projects-section">
      <div className="section-wrapper" ref={ref}>
        <div className="reveal section-label">PROJECTS</div>
        <h2 className="reveal section-heading">Selected Projects</h2>
        <p className="reveal section-intro">
          Systems, tools, and experiments — applied ML and NLP across health, language, and vision.
        </p>

        {/* Filter bar */}
        <div className="reveal projects__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`projects__filter-pill ${active === f ? 'projects__filter-pill--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p) => (
            <div key={p.name} className="reveal projects__card card-base">
              <div className="projects__card-inner">
                {p.featured && (
                  <span className="projects__featured-badge">FEATURED</span>
                )}
                <span className="projects__category">{p.category}</span>
                <h3 className="projects__name">{p.name}</h3>
                <p className="projects__desc">{p.desc}</p>
                <div className="projects__tech">
                  {p.tech.map(t => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                <div className="projects__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-pill">
                      Live ↗
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="link-pill">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
