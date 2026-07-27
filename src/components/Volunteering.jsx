import styles from './Volunteering.module.css'

export default function Volunteering() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Experience</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.card}>
        <span className={styles.role}>Research Associate</span>
        <span className={styles.org}>Research Den</span>
        <span className={styles.timeline}>Aug 2025 – Present · Remote, United States</span>
        <p className={styles.description}>
          Co-authored a peer-reviewed research manuscript currently under review, contributing
          across data analysis, experimentation, and writing. Active contributor across multiple
          ongoing research projects, applying machine learning techniques across the full research pipeline.
        </p>
      </div>

      <div className={styles.card}>
        <span className={styles.role}>Junior Python Mentor</span>
        <span className={styles.org}>SUST Data Science Club</span>
        <span className={styles.timeline}>Jul 2025 – Sep 2025 · Sylhet, Bangladesh</span>
        <p className={styles.description}>
          Served as a mentor in the 7-day "PyNEXT" Python course, guiding a cohort of 50 students
          through Python fundamentals and troubleshooting challenges. Provided one-on-one support
          to strengthen participants' programming skills.
        </p>
      </div>
    </section>
  )
}
