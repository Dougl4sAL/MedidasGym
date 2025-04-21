// src/pages/HomePage.jsx
import { HomeButtons } from '../components/Buttons'
import { MedidasHomePage, MedidasEvolucao } from '../components/Medida'

export default function HomePage() {
  return (

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

  )
}