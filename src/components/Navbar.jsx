import { useState } from 'react'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'research', href: '#research' },
  { label: 'competitions', href: '#competitions' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>Adib</div>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
