
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Rodape from './components/Rodape/'
import SobreNospage from './pages/SobreNosPage'
import HomePages from './pages/HomePages'
import ServicosPages from './pages/ServicosPages'
import Cabecalho from './components/Cabecalho'
import pagina3 from './pages/pagina3'
import pagina4 from './pages/pagina4'

function App() {
  return (
    <>
      <BrowserRouter>
      <Cabecalho />
      <main>
       <Routes>
        <Route path='/'element={<HomePages />} />
        <Route path='/servicos'element={<ServicosPages />} />
        <Route path='/sobre-nos'element={<SobreNospage />} />
        <Route path='/pagina3'element={<pagina3 />} />
        <Route path='/pagina4'element={<pagina4 />} />
       </Routes>
      </main>
      <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App
