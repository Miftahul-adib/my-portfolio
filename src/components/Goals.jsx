import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const GOALS = [
  {
    title: 'Philosophy, Psychology, Neuroscience & AI',
    body: 'I am deeply interested in the intersection of mind and machine — how insights from philosophy of mind, cognitive psychology, and neuroscience can inform how we build and think about artificial intelligence, and what AI in turn reveals about cognition itself.',
  },
  {
    title: 'Machine Learning in Healthcare & Physical Science',
    body: 'In healthcare, ML can reach patients that specialist care cannot — like predicting disease, flagging risk, making the invisible visible in clinical data. In physical science, the laws are known but the patterns are not, and models that respect domain constraints while discovering what lies beyond human intuition are some of the most interesting things you can build.',
  },
  {
    title: 'Faculty Finder',
    body: "I'm working on a goal to build a platform for PhD aspirants to find professors whose research aligns with their interests.",
  },
  {
    title: 'Agentic AI & LLMs',
    body: 'Building and studying autonomous LLM-based systems that can plan, use tools, and act across multi-step tasks — with a genuine interest in where these systems work, where they fail, and why.',
  },
]

export default function Goals() {
  const ref = useScrollReveal()

  return (
    <section id="goals" className="about-section">
      <div className="section-wrapper" ref={ref}>
        <div className="reveal section-label">GOALS</div>
        <h2 className="reveal section-heading">What I'm Working Towards</h2>
        <div className="about__goals-grid" style={{ marginTop: '0' }}>
          {GOALS.map((g) => (
            <div key={g.title} className="reveal card-base about__goal-card">
              <h4 className="about__goal-title">{g.title}</h4>
              <p className="about__goal-body">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}