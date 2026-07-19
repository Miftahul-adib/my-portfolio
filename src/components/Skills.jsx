import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'languages',
    skills: ['Python', 'SQL', 'HTML'],
  },
  {
    label: 'machine learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'YOLO', 'Hugging Face', 'Whisper', 'LangChain'],
  },
  {
    label: 'databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'FAISS'],
  },
  {
    label: 'data & visualization',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'MS Excel'],
  },
  {
    label: 'statistical software',
    skills: ['SPSS', 'Stata'],
  },
  {
    label: 'web & deployment',
    skills: ['FastAPI', 'Pydantic', 'Streamlit', 'Docker', 'Render', 'Railway', 'Vercel'],
  },
  {
    label: 'tools & platforms',
    skills: ['Git', 'GitHub', 'Kaggle'],
  },
]

export default function Skills() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Skills</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.card}>
            <span className={styles.groupLabel}>
              <span className={styles.bracket}>[</span>
              {group.label}
              <span className={styles.bracket}>]</span>
            </span>
            <div className={styles.pills}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
