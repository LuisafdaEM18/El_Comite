import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home.jsx' 
import IniciarSesion from '../src/Pages/IniciarSesion.jsx'
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion/>} /> 
      </Routes>
    </Router>
  )
}

export default App