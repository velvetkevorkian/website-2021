import Link from 'next/link'
import styles from './styles.module.css'
import Center from 'components/Center'

export default function Nav() {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'Projects', href: '/projects' },
  ]

  return (
    <nav>
      <Center>
        <ul className={styles['main-nav-list']}>
          { links.map(l => (
            <li className={styles['main-nav-item']} key={l.href}>
              <Link href={l.href}>
                <a className={styles['main-nav-link']}>{l.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Center>
    </nav>
  )
}
