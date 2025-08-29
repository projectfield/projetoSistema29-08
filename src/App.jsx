import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'
import Footer from './components/Footer'

function App() {

  return (
    // Habilida a navegação por rotas na aplicação
    <BrowserRouter>
    {/* Chamando o componente Nav */}
    <Nav/>
    <main>
      {/* Gerencia a exibição dos componentes com base na url */}
      <Routes>
        {/* Rota para chamar urls não encontradas */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar o Home */}
        <Route path="/" element={<Home/>}/>

        {/* Rota para chamar o Cliente */}
        <Route path="/cliente" element={<Cliente/>}/>

      </Routes>
    </main>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App
