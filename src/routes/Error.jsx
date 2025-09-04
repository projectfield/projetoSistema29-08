import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="">
        <p className="text-lg text-gray-400">Error 404</p>
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">Page Not Found</h4>
        <button className="mt-8 py-3 px-6 rounded-4xl text-white font-extrabold bg-blue-400 hover:bg-blue-500 transition-colors duration-200">
        <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Voltar para Home</Link>
      </button>
      </div>
    </section>
  )
}

export default Error
