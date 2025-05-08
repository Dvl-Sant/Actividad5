🧠 Actividad 12 - Entrega y Reflexión

📌 Repositorio

🔗 Ir al repositorio en GitHub

✅ ¿Qué aprendimos?

Durante el desarrollo de esta actividad, logramos integrar de forma exitosa Google Maps dentro de una aplicación React utilizando la librería @react-google-maps/api, cumpliendo con buenas prácticas de desarrollo frontend.

👨‍💻 Temas clave que aprendimos:

Cómo generar y utilizar una API Key de Google Maps de forma segura mediante archivos .env.

Integrar mapas dinámicos con componentes como GoogleMap, Marker e InfoWindow.

Uso correcto de React Router DOM v6+ para gestionar múltiples rutas sin recargar la página (SPA).

Aplicar Tailwind CSS para lograr un diseño limpio, profesional y responsivo.

Crear una estructura de carpetas modular con componentes reutilizables.

Subir un proyecto a GitHub y mantener el control de versiones con git.

⚠️ Dificultades encontradas

🔧 Distribución del contenido: Al principio, todo el contenido se alineaba hacia la izquierda. Se corrigió estableciendo contenedores centrales con clases como mx-auto, text-center, flex, items-center, justify-center, etc.

🎨 Estilos desorganizados: Parte del CSS estaba en el lugar equivocado (App.css, index.css), lo que provocaba inconsistencias visuales. Se reorganizó todo para mantener una jerarquía clara y mantener el diseño dentro de index.css principal o dentro de Tailwind.

🧭 Confusión con rutas: React Router tiene su propia sintaxis que requiere práctica. Hubo errores como colocar componentes mal anidados o no usar correctamente los Link y Route.

🔐 Manejo del .env: Al principio, olvidamos que este archivo debe ir en el .gitignore. Se corrigió antes de subir a GitHub para proteger la API Key.

🧩 ¿Cómo resolvimos el enrutamiento?

Para gestionar la navegación entre páginas, utilizamos React Router DOM v6+:

jsx

Copiar

Editar

import { Routes, Route, Link } from 'react-router-dom'

<Routes>

  <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />} />

  <Route path="/contact" element={<Contact />} />

</Routes>

Y usamos el componente Link para cambiar de ruta sin recargar la página:

jsx

Copiar

Editar

<Link to="/">Inicio</Link>

<Link to="/about">Acerca de</Link>

<Link to="/contact">Contacto</Link>

Esto permitió una navegación fluida, sin parpadeos ni recargas completas.

🗺️ ¿Cómo integramos Google Maps?

Se utilizó la librería @react-google-maps/api, configurando un archivo .env con la API Key:

env

Copiar

Editar

VITE_GOOGLE_MAPS_API_KEY=tu_clave_api

Se creó un componente <Mapa /> que carga el mapa centrado en Mazatlán, muestra un marcador, y al hacer clic despliega una ventana de información (InfoWindow).

Además, se aplicaron estilos con Tailwind para garantizar que el mapa se viera en pantalla completa y de forma responsiva.

🎨 Paleta de Colores Aplicada

Tipo  Color

Primario  ⚪ Blanco

Secundario  🟣 Morado (#6A0DAD)

Texto ⚫ Negro (#222) y tonos grises (#444, #555)

El resultado fue una interfaz limpia, moderna y agradable a la vista.

🧠 Conclusión

Esta actividad nos permitió combinar varias tecnologías modernas:

React + React Router DOM

Google Maps API

Uso seguro de variables de entorno

Tailwind CSS para diseño responsive

Git y GitHub para control de versiones

💡 Aprendizaje clave: Integrar servicios externos como Google Maps en React es sencillo si se entiende la estructura del proyecto, se siguen buenas prácticas y se mantiene un diseño modular.

🎯 Valor agregado: Saber cómo conectar tu frontend con APIs externas (como la de Google Maps) abre la puerta a una gran cantidad de aplicaciones reales, desde apps de delivery hasta geolocalización y más.

ya funciono, tenia que activar la facturacion, actualizame este archivo readme con la practica que hicimos hoy para poderle har un git push

