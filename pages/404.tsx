import Head from 'next/head'
import pageTitle from 'lib/pageTitle'

export default function Error404(): JSX.Element {
  return (
    <>
      <Head>
        <title>{pageTitle({ pageTitle: 'Not Found' })}</title>
      </Head>
      <h1>404</h1>
    </>
  )
}
