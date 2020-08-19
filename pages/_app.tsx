import { AppProps } from 'next/app'
import '../styles/index.css'
import 'prismjs/themes/prism-okaidia.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
