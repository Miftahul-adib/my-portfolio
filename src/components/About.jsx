import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

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

const THOUGHTS = [
  {
    accent: 'var(--accent-blue)',
    heading: 'On Life',
    text: 'I think life is mostly about paying attention to the right problems, the right people, the right questions.',
  },
  {
    accent: 'var(--accent-magenta)',
    heading: 'On Research',
    text: 'People ask me what my goal is, or whether I want a PhD. Honestly, I have no idea. I do research because I love it.',
  },
  {
    accent: 'var(--accent-cyan)',
    heading: 'On Hype vs. Substance',
    text: 'The AI field moves fast and talks loudly. I think rather than chasing what is hyped, one should work on what they genuinely love.',
  },
]

const FACTS = [
  { label: 'Location', value: 'Sylhet, Bangladesh' },
  { label: 'Affiliation', value: 'Shahjalal University of Science and Technology' },
  { label: 'Position', value: 'Research Associate, Research Den (Remote, US)' },
  { label: 'Published Papers', value: '3' },
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
        {/* Label + Heading */}
        <div className="reveal section-label">ABOUT</div>
        <h2 className="reveal section-heading">Who I Am</h2>

        {/* 2a — Intro */}
        <div className="reveal about__intro">
          <p>
            I'm <strong>Miftahul Alam Adib</strong>, a Statistics undergraduate at Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh, and a Research Associate at Research Den (Remote, US). I sit at the boundary of statistical rigor and modern machine learning, drawn specifically to problems in healthcare AI and low-resource natural language processing. My work is shaped by a simple belief: that research is only as good as the populations it actually serves.
          </p>
        </div>

        {/* 2b — Why Research */}
        <div className="reveal about__why-research">
          <h3 className="about__sub-heading">Why Research</h3>
          <p>
            I love doing research. I think it's beautiful. I love when I see the patterns in the datasets and explore them. What draws me most is applying machine learning to healthcare. I think it is one of the most meaningful things we can do with these tools right now. That asymmetry between what ML can do and what healthcare access currently looks like in many parts of the world feels like exactly the kind of gap worth spending your time on. I love the puzzle of figuring out why a model fails, what the data is actually saying underneath the noise, and what it means when two variables behave in a way nobody expected. That curiosity is what keeps me here.
          </p>
          <br />
          <p>
            But my curiosity does not stop at healthcare. I worked on building systems that understand Bengali, detecting hallucinations in large language models, recognizing speech across dialects.
          </p>
          <br />
          <p>
            I also find myself drawn to education and public health questions, examining how natural hazard exposure affects children's foundational learning outcomes, or how data from large national surveys can be used to surface inequalities that policy should be addressing. Research, to me, is not confined to one domain. It is a way of asking honest questions with rigorous tools wherever the questions are worth asking.
          </p>

          <blockquote className="about__pull-quote">
            "I want the number to mean something."
          </blockquote>
        </div>

        {/* 2c — Goals */}
        <div className="reveal about__goals-section">
          <h3 className="about__sub-heading">Goals</h3>
          <div className="about__goals-grid">
            {GOALS.map((g) => (
              <div key={g.title} className="card-base about__goal-card">
                <h4 className="about__goal-title">{g.title}</h4>
                <p className="about__goal-body">{g.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2d — Thoughts */}
        <div className="reveal about__thoughts-section">
          <h3 className="about__sub-heading">A Few Things I Think About</h3>
          <div className="about__thoughts-grid">
            {THOUGHTS.map((t) => (
              <div
                key={t.heading}
                className="about__thought-card"
                style={{ borderLeft: `3px solid ${t.accent}` }}
              >
                <h4 className="about__thought-heading">{t.heading}</h4>
                <p className="about__thought-text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2e — Quick Facts */}
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
