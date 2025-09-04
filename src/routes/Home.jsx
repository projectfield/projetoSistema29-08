import imagem from '../assets/d3e920eda23e9803319f88d138c2541d.jpg'

const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="flex-1 flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 mr-16">
        <p className="text-lg text-gray-400">Loja de Carros</p>
        <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">O melhor Carro<br/>de Corrida</h4>
        <button className="mt-8 py-3 px-6 rounded-4xl text-white font-extrabold bg-blue-400">
        Participar
      </button>
      </div>
      <div className="flex-1 items-center justify-center">
        <img src={imagem} className="w-full max-w-sm md:max-w-md"/>
      </div>
    </section>
  )
}

export default Home