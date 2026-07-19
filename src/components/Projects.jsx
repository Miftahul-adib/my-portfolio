import styles from './Projects.module.css'

const stackItems = [
  'React 18 + Vite',
  'FastAPI',
  'MySQL',
  'Hugging Face',
  'DeepSeek LLM',
  'Docker',
]

export default function Projects() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Projects</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.projectName}>ScholarLink — Faculty Finder</span>
          <span className={styles.badge}>live</span>
        </div>

        <p className={styles.description}>
          AI-powered research matchmaking platform. Enables students to discover faculty
          and PhD researchers at SUST using natural language semantic search. 611+ faculty
          profiles indexed. Features user authentication, collaboration tags, saved lists,
          research interest posts, and streaming responses via server-sent events.
        </p>

        <div className={styles.stackRow}>
          <span className={styles.metaLabel}>stack ·</span>
          {stackItems.map((item, i) => (
            <span key={item} className={styles.stackItem}>
              {item}{i < stackItems.length - 1 ? ' ·' : ''}
            </span>
          ))}
        </div>

        <div className={styles.deployRow}>
          <span className={styles.metaLabel}>deployed on ·</span>
          <span className={styles.deployValue}>Railway + Vercel</span>
        </div>

        <div className={styles.linksRow}>
          <a
            href="https://faculty-finder-phi.vercel.app/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.bracket}>[</span>
            live demo
            <span className={styles.bracket}>]</span>
          </a>
          <a
            href="https://github.com/Miftahul-adib/Faculty-finder"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.bracket}>[</span>
            github
            <span className={styles.bracket}>]</span>
          </a>
        </div>
      </div>
    </section>
  )
}
