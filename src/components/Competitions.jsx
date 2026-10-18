import React, { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Competitions.css'

const COMPETITIONS = [
  {
    badge: '4th Place',
    organizer: 'Shobdotori · AIFication',
    title: 'Bangla Dialect Speech Recognition',
    method: 'Dual-stage fine-tuning pipeline using Whisper Medium and LoRA for dialect-aware Bangla speech recognition.',
    tags: ['Whisper', 'LoRA', 'Speech', 'Bengali'],
    team: 'BackpropSust',
    code: 'https://github.com/Miftahul-adib/AIFication-4th-Place-Solution-BackpropSust',
  },
  {
    badge: 'Top 15 / 101 Teams',
    organizer: 'DUET AI Hackathon',
    title: 'RoadVision — Vehicle Detection',
    method: 'YOLOv8-based multi-class vehicle detection pipeline trained and evaluated on Bangladesh highway CCTV footage.',
    tags: ['YOLOv8', 'Object Detection', 'Computer Vision'],
    team: 'BackpropSust',
    code: 'https://github.com/Miftahul-adib/Duet-AI-Hackathon-solution',
  },
  {
    badge: 'Rank 20 / 151 Teams',
    organizer: 'National Datathon',
    title: 'PoliMemeDecode — Political Meme Classification',
    method: 'Dual-encoder setup (DeBERTa-v3 + RoBERTa) combined with YOLO logo detection and InsightFace for multimodal political meme classification.',
    tags: ['DeBERTa', 'RoBERTa', 'YOLO', 'Multimodal', 'NLP'],
    team: 'BackpropSust',
    code: 'https://github.com/Miftahul-adib/PoliMemeDecode',
  },
  {
    badge: 'Final Round',
    organizer: 'Infinity AI Buildfest · BRAC University',
    title: 'SkinAI — Rural Healthcare Access',
    method: 'Platform connecting rural patients in Bangladesh with nearby doctors, with initial skin condition prediction from uploaded images. Selected for preliminary and final round (Healthcare track).',
    tags: ['Healthcare', 'Computer Vision', 'Deployment'],
    team: 'Paradox',
  },
  {
    badge: '4th Place · Online Track',
    organizer: 'Build With Gemma @Bangladesh 2026 · Kaggle · Google DeepMind',
    title: 'Khata — Whiteboard-to-Practice Pipeline',
    method: 'Gemma-powered pipeline that photographs a classroom whiteboard and converts it into structured board-exam practice questions.',
    tags: ['Gemma', 'LLM', 'Education', 'Multimodal'],
    team: 'BackpropSust',
    writeup: 'https://www.kaggle.com/competitions/build-with-gemma-bangladesh/writeups/new-writeup-1785044974927',
  },
]

function TimelineDot({ visible }) {
  return (
    <div className={`comp__dot ${visible ? 'comp__dot--visible' : ''}`} />
  )
}

export default function Competitions() {
  const ref = useScrollReveal()
  const dotsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('comp__dot--visible')
          }
        })
      },
      { threshold: 0.5 }
    )

    dotsRef.current.forEach(dot => {
      if (dot) observer.observe(dot)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="competitions" className="competitions-section">
      <div className="section-wrapper" ref={ref}>
        <div className="reveal section-label">COMPETITIONS</div>
        <h2 className="reveal section-heading">Competitive ML</h2>
        <p className="reveal section-intro">
          National and international competitions in NLP, computer vision, and applied AI.
          <br />
         
        </p>

        {/* Timeline */}
        <div className="comp__timeline">
          <div className="comp__line" />
          {COMPETITIONS.map((c, i) => (
            <div key={c.title} className="reveal comp__entry">
              <div
                className="comp__dot"
                ref={el => dotsRef.current[i] = el}
              />
              <div className="comp__card card-base">
                <div className="comp__card-header">
                  <span className="comp__organizer">{c.organizer}</span>
                  <span className="comp__badge">{c.badge}</span>
                </div>
                <h3 className="comp__title">{c.title}</h3>
                {c.team && (
                  <p className="comp__team">Team: {c.team}</p>
                )}
                <p className="comp__method">{c.method}</p>
                <div className="comp__tags">
                  {c.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>
                <div className="comp__links">
                  {c.code && (
                    <a href={c.code} target="_blank" rel="noopener noreferrer" className="link-pill">Code ↗</a>
                  )}
                  {c.writeup && (
                    <a href={c.writeup} target="_blank" rel="noopener noreferrer" className="link-pill">Writeup ↗</a>
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
