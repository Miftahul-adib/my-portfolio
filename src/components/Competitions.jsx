import styles from './Competitions.module.css'

const competitions = [
  {
    name: 'Shobdotori — Bangla Dialect Speech Recognition',
    badge: '4th / 60+ teams',
    description: 'Bangla dialect speech recognition using a dual-stage fine-tuning pipeline with Whisper Medium and LoRA. Competed against 60+ teams.',
    team: 'Backprop Sust',
    host: 'Dept. of ETE, CUET',
    link: 'https://github.com/Miftahul-adib/AIFication-4th-Place-Solution-BackpropSust',
  },
  {
    name: 'DUET AI Hackathon — RoadVision',
    badge: 'top 15 / 101 teams',
    description: 'YOLOv8-based multi-class vehicle detection pipeline for Bangladesh highway CCTV footage. Qualified and presented onsite. Sponsored by ICT Division Bangladesh.',
    team: 'Backprop Sust',
    host: 'Dept. of CSE, DUET',
    link: 'https://github.com/Miftahul-adib/Duet-AI-Hackathon-solution',
  },
  {
    name: 'PoliMemeDecode — National Datathon',
    badge: 'Kaggle private leaderboard rank 20 of 151 teams',
    description: 'Political meme classification using a dual-encoder setup (DeBERTa-v3 + RoBERTa) with YOLO logo detection and InsightFace for multimodal understanding.',
    team: 'Backprop Sust',
    host: 'CUET CSE FEST 2025',
    link: 'https://github.com/Miftahul-adib/CUET-CSE-FEST-2025-NATIONAL-DATATHON',
  },
]

export default function Competitions() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Competitions</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.stack}>
        {competitions.map((comp, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.topRow}>
              <span className={styles.name}>{comp.name}</span>
              <span className={styles.badge}>{comp.badge}</span>
            </div>

            <p className={styles.description}>{comp.description}</p>

            <div className={styles.meta}>
              <span className={styles.metaLine}>
                <span className={styles.metaLabel}>team: </span>{comp.team}
              </span>
              <span className={styles.metaLine}>
                <span className={styles.metaLabel}>host: </span>{comp.host}
              </span>
            </div>

            <div className={styles.linkRow}>
              <a
                href={comp.link}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.bracket}>[</span>
                view solution
                <span className={styles.bracket}>]</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
