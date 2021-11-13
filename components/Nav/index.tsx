import Link from 'next/link'
import styles from './styles.module.css'
import Center from 'components/Center'
import isActive from 'lib/isActive'

const links = [
  { title: 'Home', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' },
]

function menuItem({ title, href, currentPath }) {
  const activeClass = isActive(currentPath, href) ? styles['active']: ''
  const linkClasses = [
    styles['main-nav-link'],
    activeClass
  ].filter(Boolean).join(' ')

  return (
    <li className={styles['main-nav-item']} key={href}>
      <Link href={href}>
        <a className={linkClasses}>{title}</a>
      </Link>
    </li>
  )
}

export default function Nav({ currentPath }) {
  return (
    <nav>
      <Center>
        <ul className={styles['main-nav-list']}>
          { links.map(l => (
            menuItem({...l, currentPath })
          ))}
        </ul>
      </Center>
    </nav>
  )
}
