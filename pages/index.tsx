import Link from 'next/link'

export default function Home(): React.ReactNode {
  const links = [
    {title: 'Blog', path: '/blog'},
    {title: 'Projects', path: '/project'},
  ]
  return (
    <div>
      Hello World.
      <ul>
        { links.map(l => (
          <li>
            <Link href={l.path}>
              <a>{l.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
