import Link from 'next/link'

export default function Footer(): JSX.Element {
  const links = [
    { title: 'Follow me on Twitter', href: 'https://twitter.com/k_macquarrie' }
  ]
  return (
    <footer>
      <nav>
        <ul>
          {links.map(l => (
          <li>
            <Link href={l.href}>
              <a>{l.title}</a>
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    </footer>
  )
}
