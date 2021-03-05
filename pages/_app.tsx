if(process.env.NODE_ENV === 'development') {
  require('preact/devtools')
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
