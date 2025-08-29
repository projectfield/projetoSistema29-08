import { BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'


function App() {
  const [count, setCount] = useState(0)

  return (
    // habilita a navegação por rotas
    <BrowserRouter>
    {/* Chamando Nav */}
    <Nav> 
      <main>
        {/* Gerencia a exibição dos componentes */}
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/cliente" element={<Cliente/>}/>
        </Routes>
      </main>
    </Nav>
      
    </BrowserRouter>
  )
}

export default App
