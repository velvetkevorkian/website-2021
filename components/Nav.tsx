import Link from 'next/link'

export default function Nav(): JSX.Element {
  const links = [
    { title: 'Blog', href: '/blog' },
    { title: 'Projects', href: '/projects' },
    { title: 'Labs', href: '/labs' }
  ]

  return (
    <nav>
      <ul>
        { links.map(l => (
          <li>
            <Link href={l.href}>
              <a>{l.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
