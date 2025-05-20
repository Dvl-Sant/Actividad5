import { Routes, Route, Link } from 'react-router-dom';
import Home     from './components/Home';
import About    from './components/About';
import Contact  from './components/Contact';
import Mapa     from './components/Mapa';
import Ruta     from './components/Ruta';
import MapaConClustering from './components/MarkerConClustering'; // CORRECTO

import './index.css';

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/Mapa">Mapa</Link>
        <Link to="/ruta">Ruta</Link> 
        <Link to="/MapaClusters">Mapa con Clusters</Link> {/* Este enlace sigue bien */}
      </nav>

      <div className="main-container">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/Mapa"         element={<Mapa />} />
          <Route path="/ruta"         element={<Ruta />} /> 
          <Route path="/MapaClusters" element={<MapaConClustering />} /> {/* ACTUALIZADO */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
