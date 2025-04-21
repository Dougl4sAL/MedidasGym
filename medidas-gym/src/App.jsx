import React from 'react'
import Navbar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import AdicionarMedidaPage from './pages/AdicionarMedidaPage'
import HistoricoPage from './pages/HistoricoPage'
import HomePage from './pages/HomePage'
import RelatorioPage from './pages/RelatorioPage'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      {/* O BrowserRouter é o roteador que vai fazer a navegação entre as páginas
      O Routes é o container que vai conter as rotas 
      e o Route é o caminho indicando para onde ir e chamando os componentes*/}
      <Routes>
        {/* path é o caminho para a pagina e element redenriza os componentes/pagina */}
        <Route path="/" element={<HomePage />} />
        <Route path="/adicionar" element={<AdicionarMedidaPage />} />
        <Route path="/historico" element={<HistoricoPage />} />
        <Route path="/relatorio" element={<RelatorioPage />} />
      </Routes>
    </>
  )
}

export default App