import React from 'react'
import { HomeButtons } from './components/Buttons'
import Navbar  from './components/NavBar'
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

          </div>

        </div>
        
      </div>
    </>
  );
}

export default App;
