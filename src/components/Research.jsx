import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Research.css'

const PUBLISHED = [
  {
    num: '01',
    title: 'A Dual Pipeline Machine Learning Framework for Automated Multi-Class Sleep Disorder Screening Using Hybrid Resampling and Ensemble Learning',
    plain: 'Designed a two-stage ML pipeline for automatically detecting sleep disorders — addressing severe class imbalance through hybrid resampling and combining multiple classifiers to improve reliability across disorder categories.',
    tags: ['Ensemble Learning', 'Healthcare', 'Class Imbalance', 'Screening'],
    venue: 'arXiv · 2025',
    paper: 'https://arxiv.org/abs/2601.05814',
    code: 'https://github.com/Miftahul-adib/sleep-disorder',
  },
  {
    num: '02',
    title: 'A Coverage Preserving Ensemble Framework with Minority Recovery for Robust Indoor Localization',
    plain: 'Proposed an ensemble-based localization system that maintains coverage across the full indoor space while recovering accuracy for underrepresented zones — a common failure mode in WiFi fingerprinting systems.',
    tags: ['Indoor Localization', 'Ensemble Learning', 'Minority Recovery', 'Coverage'],
    venue: 'IJABC · JSTAGE · 2026',
    paper: 'https://www.jstage.jst.go.jp/article/ijabc/2026/2/2026_160/_article',
    code: 'https://github.com/Miftahul-adib/Coverage-preserving-localization',
  },
  {
    num: '03',
    title: 'Explainable Machine Learning for Chronic Kidney Disease Classification from Routine Urinalysis and Diabetes Records',
    plain: 'Built an interpretable ML pipeline for CKD classification using routine clinical tests — applying SHAP and LIME to make model decisions transparent and clinically meaningful.',
    tags: ['Explainable AI', 'CKD', 'Healthcare', 'SHAP', 'LIME'],
    venue: 'ResearchSquare · Preprint',
    paper: 'https://www.researchsquare.com/article/rs-10968179/v1',
    code: 'https://github.com/Munfa/CKD-Explainable-AI',
  },
]

const ONGOING = [
  {
    domain: 'Education · Public Health',
    title: 'Natural Hazard Exposure & Child Literacy in Bangladesh',
    desc: 'Examining whether recent natural hazard exposure affects foundational reading and numeracy skills in children aged 7–14, using the nationally representative MICS 2025 dataset.',
  },
  {
    domain: 'NLP · Mental Health',
    title: 'SYMTOLOGY: Code-Mixed Mental Health Dataset',
    desc: 'Building a synthetic code-mixed dataset for mental health in a low-resource language using an ontology-driven prompting framework — targeting Bengali–English mixing patterns.',
  },
  {
    domain: 'Healthcare AI · CGM',
    title: 'CGM Forecasting Sensitivity Analysis',
    desc: 'Systematic analysis of how short-term blood glucose forecasting models respond to changes in evaluation protocol, historical input window length, and prediction horizon.',
  },
  {
    domain: 'Healthcare AI · CGM',
    title: 'Cross-Population CGM Forecasting',
    desc: 'Developing a leakage-controlled evaluation framework to test whether short-term CGM forecasting models generalize across different patient populations.',
  },
  {
    domain: 'Healthcare AI · CKD',
    title: 'Three-Dataset CKD Harmonization',
    desc: 'Harmonizing three chronic kidney disease datasets for cross-dataset analysis, external model validation, and explainable machine learning — addressing inconsistencies in feature definitions and label conventions.',
  },
]

export default function Research() {
  const ref = useScrollReveal()

  return (
    <section id="research" className="research-section">
      <div className="section-wrapper" ref={ref}>
        <div className="reveal section-label">RESEARCH</div>
        <h2 className="reveal section-heading">Research Work</h2>
        <p className="reveal section-intro">
          Published papers and ongoing investigations across healthcare AI, NLP, and clinical machine learning.
        </p>

        {/* Published */}
        <div className="reveal research__sub-label research__sub-label--published">PUBLISHED</div>
        <div className="research__papers">
          {PUBLISHED.map((p) => (
            <div key={p.num} className="reveal research__paper-card">
              <div className="research__paper-inner">
                <div className="research__paper-header">
                  <span className="research__paper-num">{p.num}</span>
                  <span className="research__paper-venue">{p.venue}</span>
                </div>
                <h3 className="research__paper-title">{p.title}</h3>
                <p className="research__paper-plain">{p.plain}</p>
                <div className="research__tags">
                  {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>
                <div className="research__links">
                  <a href={p.paper} target="_blank" rel="noopener noreferrer" className="link-pill">Paper ↗</a>
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="link-pill">Code ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing */}
        <div className="reveal research__sub-label research__sub-label--ongoing">ONGOING</div>
        <div className="research__ongoing-grid">
          {ONGOING.map((o) => (
            <div key={o.title} className="reveal research__ongoing-card card-base">
              <div className="research__ongoing-status">IN PROGRESS</div>
              <div className="research__ongoing-domain">{o.domain}</div>
              <h3 className="research__ongoing-title">{o.title}</h3>
              <p className="research__ongoing-desc">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
