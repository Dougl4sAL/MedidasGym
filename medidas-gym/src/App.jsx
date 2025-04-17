import React from 'react'
import { HomeButtons } from './components/Buttons'
import Navbar  from './components/NavBar'

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <HomeButtons />

        <div className="container-info">

        </div>
        
      </div>
    </>
  );
}

export default App;
