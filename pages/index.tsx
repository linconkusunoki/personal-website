const Home = () => {
  return (
    <main className="w-96 bg-white relative block p-8 overflow-hidden border border-gray-100 rounded-lg">
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between flex">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Lincon Kusunoki</h1>
          <h2 className="mt-1 text-xs font-medium text-gray-600">
            Frontend Engineer
          </h2>
        </div>

        <div className="flex-shrink-0 ml-3 sm:block">
          <img
            className="object-cover w-16 h-16 rounded-lg shadow-sm"
            src="https://avatars.githubusercontent.com/u/5117676?v=4"
            alt="Lincon Kusunoki"
          />
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">
          Hey I'm currently working at{' '}
          <a
            href="https://cecotec.es/"
            target="_blank"
            className="text-blue-600"
          >
            Cecotec
          </a>{' '}
          and I realy like to think about Design Patterns, Clean Architecture,
          SOLID, TDD and more...
        </p>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">9 years</dt>
          <dd className="text-xs text-gray-500">Experience</dd>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <dt className="text-sm font-medium text-gray-600">
            NextJS | Tailwind | TypeScript
          </dt>
          <dd className="text-xs text-gray-500">Current Stack</dd>
        </div>
      </dl>
    </main>
  )
}

export default Home
