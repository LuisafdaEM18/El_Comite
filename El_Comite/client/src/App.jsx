import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home.jsx' 
import InicioSesion from '../src/Pages/iniciosesion.jsx' 
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
      </Routes>
    </Router>
  )
}

export default App