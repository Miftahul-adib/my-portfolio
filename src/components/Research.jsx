import styles from './Research.module.css'

const papers = [
  {
    status: 'under review',
    year: 'Jan 2026',
    title: 'A Dual Pipeline Machine Learning Framework for Automated Multi-Class Sleep Disorder Screening Using Hybrid Resampling and Ensemble Learning',
    description: 'Designed a dual-pipeline architecture to model physiological dependencies. Applied SMOTETomek resampling to address class imbalance. Achieved 98.67% accuracy, outperforming all baseline models. Validated statistical significance using the Wilcoxon Signed-Rank Test.',
    publication: null,
    links: [
      { label: 'arxiv', href: 'https://arxiv.org/abs/2601.05814' },
      { label: 'github', href: 'https://github.com/Miftahul-adib' },
    ],
  },
  {
    status: 'published',
    year: 'April 2026',
    title: 'A Coverage Preserving Ensemble Framework with Minority Recovery for Robust Indoor Localization',
    description: 'BLE-based indoor localization framework for nursing care environments. Uses Random Forest classification, temporal smoothing, adaptive thresholding, and minority room recovery. Presented at ABC 2026 Conference.',
    publication: 'International Journal of Activity and Behavior Computing, Vol. 2026, Issue 2',
    links: [
      { label: 'paper', href: 'https://www.jstage.jst.go.jp/article/ijabc/2026/2/2026_160/_article' },
      { label: 'github', href: 'https://github.com/Miftahul-adib' },
    ],
  },
]

export default function Research() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Research</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.stack}>
        {papers.map((paper, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.topRow}>
              <span className={paper.status === 'published' ? styles.badgePublished : styles.badgeReview}>
                {paper.status}
              </span>
              <span className={styles.year}>{paper.year}</span>
            </div>

            <p className={styles.title}>{paper.title}</p>
            <p className={styles.description}>{paper.description}</p>

            {paper.publication && (
              <p className={styles.publication}>{paper.publication}</p>
            )}

            <div className={styles.linksRow}>
              {paper.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.bracket}>[</span>
                  {link.label}
                  <span className={styles.bracket}>]</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
