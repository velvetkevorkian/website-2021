import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <header>
      <a href="#content">Skip to content</a>
      <Link href="/">
        <a>Kyle Macquarrie</a>
      </Link>
    </header>
  )
}
