import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Mapa from "./components/Mapa";
import Ruta from "./components/Ruta";
import MapaConClustering from "./components/MarkerConClustering";
import MapRuta from "./components/MapRuta"; // IMPORT CORRECTO

import "./index.css";
import MapDrawing from "./components/MapDrawing";

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/Mapa">Mapa</Link>
        <Link to="/mapruta">Ruta (actividad)</Link> {/* NUEVA RUTA */}
        <Link to="/MapaClusters">Mapa con Clusters</Link>
        <Link to="/MapDrawing">Drawing</Link>
      </nav>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/mapruta" element={<MapRuta />} />
          <Route path="/MapDrawing" element={<MapDrawing />} />
          <Route path="/MapaClusters" element={<MapaConClustering />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
