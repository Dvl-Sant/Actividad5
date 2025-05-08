import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Mapa from './components/Mapa';
import MapaConRuta from './components/Ruta'; // Importa el componente MapaConRuta
import './index.css';

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/Mapa">Mapa</Link>
        <Link to="/ruta">Ruta</Link> {/* Agrega un Link al componente Ruta */}
      </nav>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/ruta" element={<MapaConRuta />} /> {/* Agrega una Route para el componente MapaConRuta */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
