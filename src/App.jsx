import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Mapa from './components/Mapa'
import './index.css' // Importar estilos

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/Mapa">Mapa</Link>
      </nav>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Mapa" element={<Mapa />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
