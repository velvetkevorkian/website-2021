import Head from 'next/head'
import pageTitle from 'lib/pageTitle'

export default function Error404() {
  return (
    <>
      <Head>
        <title>{pageTitle({ pageTitle: 'Not Found' })}</title>
      </Head>
      <h1>404</h1>
    </>
  )
}

export const config = {
  unstable_runtimeJS: false
}
