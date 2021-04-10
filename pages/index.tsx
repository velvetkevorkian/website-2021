import Head from 'next/head'
import pageTitle from 'lib/pageTitle'

export default function Home(): React.ReactNode {
  return (
    <>
      <Head>
        <title>{ pageTitle({ pageTitle: 'Home' }) }</title>
      </Head>
      <div>
        Hello World. This is the home page.
      </div>
    </>
  )
}
