import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Darkmode from 'darkmode-js'
import '../styles/index.css'
import 'prismjs/themes/prism-okaidia.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new Darkmode({ label: '🌓' }).showWidget()
  }, [])
  return <Component {...pageProps} />
}
