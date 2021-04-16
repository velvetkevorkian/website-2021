import Link from 'next/link'
import twitter from 'assets/images/twitter.svg'
import styles from './styles.module.css'

export default function Footer() {
  const links = [
    { title: 'Follow me on Twitter', href: 'https://twitter.com/k_macquarrie', icon: twitter },
    { title: 'Style guide', href: '/style-guide' },
  ]
  return (
    <footer>
      <nav>
        <ul className={styles['footer-nav-list']}>
          {links.map(l => (
            <li className={styles['footer-nav-item']}>
              <Link href={l.href}>
                <a className={styles['footer-nav-link']}>
                  { l.icon && (
                    <svg className={styles['footer-nav-icon']}>
                      <use href={`${l.icon}#icon`}/>
                    </svg>
                  )}
                  {l.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
