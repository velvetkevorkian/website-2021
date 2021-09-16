import Head from 'next/head'
import pageTitle from 'lib/pageTitle'

export default function Home() {
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

export const config = {
  unstable_runtimeJS: false
}
