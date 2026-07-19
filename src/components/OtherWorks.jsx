import styles from './OtherWorks.module.css'

const repos = [
  {
    name: 'Roadside-object-detection',
    description: 'YOLOv11n real-time roadside object detection model.',
    link: 'https://github.com/Miftahul-adib/Roadside-object-detection',
  },
  {
    name: 'Building-a-RAG-system',
    description: 'First exploration into building a retrieval-augmented generation system from scratch.',
    link: 'https://github.com/Miftahul-adib/Building-a-RAG-system',
  },
  {
    name: 'Retrieval-Augmented-QA-System',
    description: 'FAISS + TAPAS based QA system built on a student performance dataset.',
    link: 'https://github.com/Miftahul-adib/Retrieval-Augmented-QA-System',
  },
  {
    name: 'Youtube-data-analysis',
    description: 'Exploratory analysis of the top 100 YouTube channels dataset.',
    link: 'https://github.com/Miftahul-adib/Youtube-data-analysis',
  },
]

export default function OtherWorks() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Other Works</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.grid}>
        {repos.map((repo) => (
          <div key={repo.name} className={styles.card}>
            <div>
              <span className={styles.repoName}>{repo.name}</span>
              <p className={styles.repoDesc}>{repo.description}</p>
            </div>
            <a
              href={repo.link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.bracket}>[</span>
              github
              <span className={styles.bracket}>]</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
