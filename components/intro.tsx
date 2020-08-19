import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = { name: string }

const links = [
  {
    href: '/',
    name: 'Sobre',
  },
  {
    href: '/blog',
    name: 'Blog',
  },
  // {
  //   href: '/portfolio',
  //   name: 'Portfolio',
  // },
]

const Intro = ({ name }: Props) => {
  const router = useRouter()
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {name}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {links.map(({ href, name }) => {
          return (
            <Link href={href} key={name}>
              <a
                aria-label={name}
                className={router.pathname === href ? 'font-bold ml-4' : 'ml-4'}
              >
                {name}
              </a>
            </Link>
          )
        })}
      </h4>
    </section>
  )
}

export default Intro
