import styles from './Contact.module.css'

const contacts = [
  { label: 'email', display: 'miftahuladib04@gmail.com', href: 'mailto:miftahuladib04@gmail.com' },
  { label: 'github', display: 'github.com/Miftahul-adib', href: 'https://github.com/Miftahul-adib' },
  { label: 'linkedin', display: 'linkedin.com/in/miftahul-alam-adib', href: 'https://linkedin.com/in/miftahul-alam-adib' },
  { label: 'kaggle', display: 'kaggle.com/miftahuladib', href: 'https://kaggle.com/miftahuladib' },
  { label: 'scholar', display: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=3UH7xHsAAAAJ' },
]

export default function Contact() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Contact</h2>
      </div>
      <hr className={styles.rule} />

      <div className={styles.grid}>
        {contacts.map((c) => (
          <div key={c.label} className={styles.item}>
            <span className={styles.label}>{c.label}</span>
            <a
              href={c.href}
              className={styles.value}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {c.display}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
