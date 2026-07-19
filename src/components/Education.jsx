import styles from './Education.module.css'

export default function Education() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Education</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.degree}>B.Sc. in Statistics</span>
          <span className={styles.timeline}>Nov 2024 – Present</span>
        </div>
        <span className={styles.institution}>
          Shahjalal University of Science and Technology (SUST), Sylhet
        </span>
        <span className={styles.badge}>ongoing</span>
      </div>
    </section>
  )
}
