import Link from 'next/link'

export default function Home(): React.ReactNode{
  return (
    <div>
      Hello World.
      <ul>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
