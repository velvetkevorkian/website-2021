import Link from 'next/link'
import SkipLink from 'components/SkipLink'

export default function Header(): JSX.Element {
  return (
    <header>
      <SkipLink />
      <Link href="/">
        <a>Kyle Macquarrie</a>
      </Link>
    </header>
  )
}
