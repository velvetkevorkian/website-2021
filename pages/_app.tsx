import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../app.css'

if(process.env.NODE_ENV === 'development') {
  require('preact/devtools')
}

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Header />
      <Nav />
      <main id="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
