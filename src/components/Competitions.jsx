import React from 'react'
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

export default function Competitions() {
  const ref = useScrollReveal()

  return (
    <section id="competitions" className="page-section competitions-section">
      <div className="page-section__sidebar" />
      <div className="section-wrapper" ref={ref}>
        <span className="reveal section-label">Competitions</span>

        <div className="comp__list">
          {COMPETITIONS.map((c) => (
            <div key={c.title} className="reveal comp__entry">
              <div className="comp__header">
                <span className="comp__organizer">{c.organizer}</span>
                <span className="comp__badge">{c.badge}</span>
              </div>
              <h3 className="comp__title">{c.title}</h3>
              {c.team && (
                <p className="comp__team">Team: {c.team}</p>
              )}
              <p className="comp__method">{c.method}</p>
              <div className="comp__tags">
                {c.tags.map(t => <span key={t} className="comp__tag">{t}</span>)}
              </div>
              <div className="comp__links">
                {c.code && (
                  <a href={c.code} target="_blank" rel="noopener noreferrer" className="comp__link">Code ↗</a>
                )}
                {c.writeup && (
                  <a href={c.writeup} target="_blank" rel="noopener noreferrer" className="comp__link">Writeup ↗</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
