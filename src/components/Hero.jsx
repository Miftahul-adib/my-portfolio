import styles from './Hero.module.css'

const links = [
  {
    label: 'email',
    href: 'mailto:miftahuladib04@gmail.com',
  },
  {
    label: 'github',
    href: 'https://github.com/Miftahul-adib',
  },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/miftahul-alam-adib',
  },
  {
    label: 'kaggle',
    href: 'https://kaggle.com/miftahuladib',
  },
  {
    label: 'scholar',
    href: 'https://scholar.google.com/citations?hl=en&authuser=1&user=3UH7xHsAAAAJ',
  },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.intro}>
          <h1 className={styles.name}>
            G.M.M. Miftahul Alam Adib
          </h1>

          <div className={styles.badge}>
            Open to ML collaborations
          </div>

          <div className={styles.linksRow}>
            {links.map((link) => {
              const isExternalLink = link.href.startsWith('http')

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.linkItem}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className={styles.photoFrame}>
          <img
            className={styles.profilePhoto}
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="G.M.M. Miftahul Alam Adib"
          />
        </div>
      </div>
    </section>
  )
}