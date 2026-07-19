import styles from './Volunteering.module.css'

export default function Volunteering() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Volunteering</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.card}>
        <span className={styles.role}>Junior Python Mentor</span>
        <span className={styles.org}>SUST Data Science Club</span>
        <span className={styles.timeline}>Jul 2025 – Sep 2025 · 3 months · On-site</span>
        <p className={styles.description}>
          Mentored learners in the 7-day "PyNEXT" Python course. Guided struggling
          learners and reinforced foundational Python concepts across the cohort.
        </p>
      </div>
    </section>
  )
}
