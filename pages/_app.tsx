import Head from 'next/head'
import type { AppProps } from 'next/app'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import pageTitle from 'lib/pageTitle'
import 'assets/css/fonts.css'
import 'assets/css/variables.css'
import 'assets/css/app.css'
import favicon from 'assets/images/favicon.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <title>{pageTitle()}</title>
      </Head>

      <Header />

      <Nav />

      <main id="content">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}
