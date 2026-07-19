import styles from './About.module.css'

export default function About() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>About</h2>
      </div>
      <hr className={styles.rule} />

      <p className={styles.body}>
        I'm a second year undergraduate student at SUST who finds machine learning
        genuinely fascinating, not just as a field to study, but as a tool to build
        things that matter. Whether it is a research problem or a side project, I like
        studying the problem carefully and figuring things out. I am open to
        collaborations where there is something interesting to work on together.
        Outside of all this, I am simply someone who likes to explore.
      </p>
    </section>
  )
}
