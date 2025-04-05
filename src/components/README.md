🧠 Fase 3 - Entrega y Reflexión


<<Repositorio>>
https://github.com/Dvl-Sant/Actividad5



<<Qué aprendimos?>>

Durante esta fase aprendimos a utilizar React Router DOM para crear una aplicación de una sola página (SPA) con rutas dinámicas. Comprendimos cómo funciona el sistema de enrutamiento interno de React y cómo estructurar una app con componentes según sus rutas. También se reforzó el uso de estilos CSS modulares y organizados para aplicar una paleta de colores profesional (blancos, morados y grises).

<<Dificultades encontradas>>

Problemas de distribución del contenido: Al inicio, todo el contenido se mostraba alineado a la izquierda.

Estilos dispersos: Se tenía CSS sin orden, en archivos incorrectos o con mala jerarquía.

Confusión con Routes y Route: Fue necesario entender bien cómo se declara cada ruta y qué componente renderiza.


<<Cómo resolvimos el enrutamiento?>>

Utilizamos react-router-dom v6+ para manejar las rutas de la siguiente manera:

jsx
Copiar
Editar
import { Routes, Route, Link } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>


Además, usamos el componente Link para navegar sin recargar la página:

jsx
Copiar
Editar

<Link to="/">Inicio</Link>
<Link to="/about">Acerca de</Link>
<Link to="/contact">Contacto</Link>


<<Paleta de Colores>>
Primario: Blanco

Secundario: Morado (#6A0DAD)

Texto: Tonos de gris y negro (#222, #444, #555)

Conclusión
React Router DOM simplifica el manejo de múltiples vistas en una SPA. Aprender a controlar rutas y estilos de manera coherente mejora tanto el desarrollo como la experiencia del usuario.