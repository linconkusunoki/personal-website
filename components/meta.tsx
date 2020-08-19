import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/assets/favicon.png" />
      <meta
        name="description"
        content="Lincon Kusunoki, Desenvolvedor de Software especializado em Frontend"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
