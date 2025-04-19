import React from 'react'
import { HomeButtons } from './components/Buttons'
import Navbar  from './components/NavBar'
import { MedidasHomePage, MedidasEvolucao } from './components/Medida'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <HomeButtons />

        <div className="container-info">

          <div className="container-medidas">
            <h2>Medidas Atuais</h2>
            <MedidasHomePage /> 
          </div>

          <div className="container-evolucao">
            <h2>Evolução</h2>
            <MedidasEvolucao />
          </div>

        </div>
        
      </div>
    </>
  );
}

export default App;
