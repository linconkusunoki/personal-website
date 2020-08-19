import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import CoverImage from '../components/cover-image'
import { CMS_NAME } from '../lib/constants'

const Portfolio = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} - Portfolio</title>
        </Head>
        <Container>
          <Intro name="Portfolio" />
          <div className="mt-12">
            <p className="mb-4 text-lg leading-relaxed">
              Nesta página apresento alguns dos projetos que trabalhei,
              incluindo projetos que desenvolvi para empresas e também projetos
              paralelos. Se você gostar de alguns desses projetos e acha que
              podemos trabalhar juntos,{' '}
              <Link href="/contact">
                <a className="text-blue-600 hover:underline">
                  entre em contato comigo.
                </a>
              </Link>
            </p>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Portfolio
