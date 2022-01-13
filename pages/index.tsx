import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import CoverImage from '../components/cover-image'
import Avatar from '../components/avatar'
import Job from '../components/job'
import Recommendation from '../components/recommendation'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} - Sobre</title>
        </Head>
        <Container>
          <Intro name="Sobre" />
          <p className="text-lg leading-relaxed mb-4 mt-12">
            Sou Senior Frontend Engineer na @Cecotec, Tenho mais de 7 anos de
            experiencia criando arquitetura e desenvolvendo software. Nos
            últimos anos, tenho focado em desenvolver aplicações que vão durar
            mais e entregar mais valor às empresas. Gosto muito de estudar sobre
            Design Patterns, SOLID e TDD. Tenho focado bastante e remover a
            regra de negócio dos frameworks (React, Vue e Angular) e definir
            todo o core usando Clean Architecture.
          </p>
          <div className="my-12">
            <CoverImage
              src="/assets/blog/mongodb-crud/cover.jpg"
              title="Lincon Kusunoki"
            />
          </div>

          <h3 className="mt-8 text-2xl leading-tight">Contato</h3>

          <p className="text-lg leading-relaxed">
            Quer dar um oi? Sinta-se a vontade para{' '}
            <a
              href="mailto:linconkusunoki@gmail.com"
              className="text-blue-600 hover:underline"
            >
              enviar um email
            </a>
          </p>

          <div className="mt-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mt-12 mb-4 lg:mb-12">
              Minha Jornada
            </h2>
            {jobs.map(({ title, description, place, date }) => (
              <Job
                key={date}
                title={title}
                description={description}
                date={date}
                place={place}
              />
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 lg:mb-12">
            Tech Stack
          </h2>
          <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 lg:row-gap-12 mb-20 md:mb-28">
            {techs.map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-4 text-3xl lg:text-6xl leading-tight">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed mb-4">{description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 lg:mb-12">
            Recomendações
          </h2>
          <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 lg:row-gap-12 mb-20 md:mb-28">
            {recommendations.map(({ name, description, post, picture }) => (
              <Recommendation
                key={name}
                name={name}
                description={description}
                post={post}
                picture={picture}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    date: 'Março 2021 - Atual',
    place: 'Cecotec Innovaciones S. L.',
    description:
      'Na Cecotec estamos trabalhando no desenvolvimento de um app utilizando React-Native, utilizando Monorepos e Clean Architecture, minha principal função é implementar uma solução que dure e que seja flexível suficiente para se usar em todos os Frameworks JavaScript Web/Hibridos.',
  },
  {
    title: 'Senior Frontend Engineer',
    date: 'Novembro 2019 - Março 2020',
    place: 'Moss Earth',
    description:
      'Minhas responsabilidades na Moss foram de implementar soluções escaláveis e seguras, desenvolver componentes que possam ser flexíveis e fáceis de mudar e fornecer uma maneira clara de conectar projetos com um design alinhado. Além disso, também executo testes cross-browser e me preocupo com acessibilidade e experiência do usuário.',
  },
  {
    title: 'Frontend Specialist',
    date: 'Maio 2018 - Novembro 2019',
    place: 'Yapay Pagamentos',
    description:
      'Como especialista da Yapay, tive a oportunidade de iniciar um Desing System, para isso utilizei tecnologias como React, Redux, Storybook. Além disso, criei novos layouts para os aplicativos e estava sempre garantindo a qualidade do código utilizando testes automatizados antes de enviar para em produção.',
  },
  {
    title: 'Frontend Developer',
    date: 'Julho 2013 - Maio 2018',
    place: 'Tray E-Commerce',
    description:
      'Aqui pude me dedicar mais profundamente à carreira Frontend, me tornei líder técnico da Agência de Design, onde eu pude contribuir para a entrega de mais layouts de e-commerce e também trazer novos recursos para novos clientes, como PWA, Google AMP e melhor classificação em motores de busca, atingindo 100/100 no Google Page Speed Insights',
  },
  {
    title: 'CPD',
    date: 'Outubro 2011 - Julho 2013',
    place: 'Colégio Lumen',
    description:
      'Como responsável do setor, utilizava maior parte do meu tempo para organizar o servidor de arquivos, realizar manutenções no site, criação e envio de emails, eu também tomei a iniciativa de refatorar todo o site da escola, mudando para a JAM Stack que na época utilizava Jekyll + GH Pages',
  },
  {
    title: 'Monitor',
    date: 'Fevereiro 2010 - Dezembro 2010',
    place: 'Prefeitura Municipal de Garça',
    description:
      'Eu pude introduzir as crianças da escola municipal à informática, atuava não somente ensinando como mexer em ferramentas básicas de trabalho como Office, mas também a navegação web. Também auxiliava os professores nas tarefas que eram relacionadas à informática.',
  },
]

const techs = [
  {
    title: 'JavaScript',
    description:
      'Esta é a minha línguagem do 💛, a que mais estudo e tenho mais domínio, é tão poderosa que com ela podemos construir tudo. Conheço todas as novidades da versão ES6+ e posteriores, também sei como aplicar a Programação Orientada a Objetos e a Programação Funcional.',
  },
  {
    title: 'HTML5 & CSS3',
    description:
      'Essas duas linguagens são os pilares da web e tenho sólidos conhecimentos sobre isso, é onde tudo começa, são a base do que podemos ver e sentir na web. Esses dois caras possibilitam estruturar grandes sistemas e frameworks como Bootstrap, Materialize, Tailwind, etc.',
  },
  {
    title: 'ReactJS',
    description:
      'React é o framework reativo que tenho um domínio, adoro trabalhar com React e seu ecossistema incluindo React Native, em meus projetos já usei Redux, Storybook, PropTypes, Styled-Components, Material-UI e muitas outras ferramentas. React tem uma comunidade vibrante e tenho orgulho de fazer parte dela.',
  },
  {
    title: 'NodeJS',
    description:
      'No lado do servidor, adoro manter o JavaScript ativo, então decidi aprender NodeJS para seguir a stack MERN. Com o Node, usei Express e MongoDB para criar APIs REST onde me hospedei no Heroku. Eu posso lidar com problemas como upload de imagens, envio de emails e autenticação.',
  },
  {
    title: 'Jest & Testing Library',
    description:
      'Adoro dormir à noite, então, para garantir isso, eu executo meus testes usando Jest juntamente com react-testing-library, então depois que comecei a testar, fiquei mais confiante sobre o software que estava entregando, também isso reflete na qualidade das minhas entregas.',
  },
  {
    title: 'Tooling',
    description:
      'Consigo usar muitas ferramentas no meu dia, mas ferramentas como NPM Scripts, Sass, Webpack, ESLint, Prettier, EditorConfig, Git, Markdown, Terminal e muitas outras são essenciais para um bom desenvolvedor web e posso dizer que Tenho domínio sobre todas essas ferramentas.',
  },
]

const recommendations = [
  {
    name: 'José Henrique Honjoya',
    post: 'Software Development Coordinator',
    picture: '/assets/avatars/honjoya.jpg',
    description:
      'A Lincon é um excelente profissional, possui habilidades que agregam muito valor à equipe, possui bons conhecimentos técnicos e teóricos, sempre demonstrando os prós e contras da utilização de qualquer norma, linguagem ou framework.',
  },
  {
    name: 'José Adolfo Costa Junior',
    post: 'Frontend e Especialista Zendesk',
    picture: '/assets/avatars/adolfo.jpg',
    description:
      'Trabalhamos juntos por quase 3 anos, e Lincon sempre se mostrou mais do que qualificado em todos os seus empreendimentos. Como desenvolvedor de Front End, ele está sempre um passo à frente, usando as melhores soluções para entregar as melhores experiências. Como colega de trabalho, ele está sempre aberto para ensinar e aprender tudo o que puder. Nosso tempo trabalhando juntos foi incrível, e muito de quem eu sou hoje é graças a ele.',
  },
  {
    name: 'Eder Munhoz dos Santos',
    post: 'Software Engineer',
    picture: '/assets/avatars/eder.jpg',
    description:
      'Tive a honra de trabalhar com Lincon e posso dizer que é um profissional realmente competente. Possui conhecimento técnico elevado e domínio total das ferramentas que utiliza. Sempre está disposto a ajudar e compartilhar ideias com o time agregando valores técnicos até a nível de negócio. Uma pessoa organizada, sempre atualizado nas tecnologias e gosta de entregas qualificadas. Um profissional que recomendo tranquilamente e agradeço muito pelos conhecimentos e troca de experiências que tivemos. Muito grato, Lincon. Sucesso!',
  },
  {
    name: 'Bruno Ferreira',
    post: 'Software Developer',
    picture: '/assets/avatars/bruno.jpg',
    description:
      'O Lincon tem um lugar muito importante em minha carreira pois foi quem me deu suporte e me mostrou o caminho certo nos meus primeiros passos como desenvolver front-end. Sempre muito responsável e pró ativo o Lincon sempre se sobressaia nas funções passadas a ele, um excelente profissional com toda certeza! Não tenho dúvidas que ele se encaixe em qualquer lugar onde trabalhe.',
  },
  {
    name: 'Cristiano Soares',
    post: 'Product Owner',
    picture: '/assets/avatars/cris.jpg',
    description:
      'O Lincon é um profissional de excelência, disciplinado e focado em superar as expectativas. No período em que estivemos envolvidos no mesmo projeto, ficou visível o profissionalismo, foco, e qualidade das entregas do Lincon. Sem dúvidas, é um profissional com grande conhecimento, técnica e de busca contínua por evolução de suas entregas.',
  },
  {
    name: 'Wesley Silva',
    post: 'Product Owner',
    picture: '/assets/avatars/wesley.jpg',
    description:
      'Lincon é um profissional Front-end de alto nível, sempre disposto a compartilhar conhecimento com os colegas e sempre inovando e estudando novas tecnologias do mercado.',
  },
  {
    name: 'Ana Flávia de S. Nava Bagagi',
    post: 'Integration Analist',
    picture: '/assets/avatars/ana.jpg',
    description:
      'Lincon é um excelente profissional. Sempre está atento nas novas tecnologias e disposto a aprender e inovar. A sua agilidade com as tecnologias é impressionante. Trabalhamos juntos na Yapay e precisei da ajuda dele com javascript em alguns projetos e sempre disposto a ajudar e com opiniões construtivas e objetivas. O quanto aprendi com o Lincon foi de grande valor profissional para mim.',
  },
  {
    name: 'Gustavo Galego',
    post: 'UI/UX Designer',
    picture: '/assets/avatars/galego.jpg',
    description:
      'Profissional extremamente focado e organizado! O Lincon foi responsável direto pelo meu desenvolvimento na área de Front-end, me ensinando grande parte do que sei hoje de HTML/CSS. Possui facilidade em encontrar soluções para problemas complexos, o que o torna um profissional extremamente competente e visionário. Valeu pelo tempo que trabalhamos juntos, aprendi de mais.',
  },
  {
    name: 'Rusterson Sato',
    post: 'Frontend Developer',
    picture: '/assets/avatars/rusterson.jpg',
    description:
      'Lincon é entusiasta no que se refere a programação (desenvolvimento) web, tanto na área de back-end quanto na de front-end, onde é o seu forte. Uma pessoa atualizada sobre as novas ferramentas do mercado, além de ser um excelente tutor, muitos dos conhecimentos que possuo hoje devo a ele. Recomendo-o aqueles que buscam uma pessoa inovadora e diferenciada para seus negócios.',
  },
  {
    name: 'Vitor Hideki Yamamoto Tiba',
    post: 'Software Developer',
    picture: '/assets/avatars/tiba.jpg',
    description:
      'Profissional extremamente dedicado e competente. Possui muita experiência e sempre compartilha seu conhecimento para que todos evoluam. Alguém muito inspirador.',
  },
  {
    name: 'Agnaldo Burgo Junior',
    post: 'Fullstack Developer',
    picture: '/assets/avatars/agnaldo.jpg',
    description:
      'Um grande profissional, além de muito conhecimento técnico sempre está pronto pra ajudar e compartilhar seu conhecimento. Somou muito em minha carreira e foi uma honra poder trabalhar com ele.',
  },
]

export default Index
