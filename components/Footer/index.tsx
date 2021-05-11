import Link from 'next/link'
import twitter from 'assets/images/twitter.svg'
import email from 'assets/images/email.svg'
import github from 'assets/images/github.svg'
import linkedin from 'assets/images/linkedin.svg'
import styles from './styles.module.css'

export default function Footer() {
  const links = [
    { title: 'Follow me on Twitter', href: 'https://twitter.com/k_macquarrie', icon: twitter },
    { title: 'Email me', href: 'mailto:kyle@kylemacquarrie.co.uk', icon: email },
    { title: 'Follow me on Github', href: 'https://github.com/velvetkevorkian', icon: github },
    { title: 'Follow me on LinkedIn', href: 'https://www.linkedin.com/in/kmacquarrie/', icon: linkedin },
    process.env.NODE_ENV !== 'production' && { title: 'Style guide', href: '/style-guide' },
  ].filter(Boolean)

  return (
    <footer className={styles['footer']}>
      <nav>
        <ul className={styles['footer-nav-list']}>
          {links.map(l => (
            <li className={styles['footer-nav-item']} key={l.href}>
              <Link href={l.href}>
                <a className={styles['footer-nav-link']}>
                  { l.icon && (
                    <svg className={styles['footer-nav-icon']}>
                      <use href={`${l.icon}#icon`}/>
                    </svg>
                  )}
                  <span className={l.icon ? 'visually-hidden' : ''}>{l.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
