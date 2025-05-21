# 🧠 Actividad 14 - Dibujo de Formas en Google Maps con React

## 📌 Repositorio

🔗 [Ir al repositorio en GitHub](https://github.com/tuusuario/tu-repo) *(reemplaza este link por el real)*

---

## ✅ ¿Qué aprendimos?

Durante esta actividad implementamos herramientas de dibujo sobre Google Maps utilizando `@react-google-maps/api`, y mostramos las coordenadas generadas directamente en la interfaz al trazar polígonos, rectángulos o polilíneas.

---

## 👨‍💻 Temas clave que aprendimos:

- Uso avanzado del componente `DrawingManager` en React.
- Captura de coordenadas de formas dibujadas y renderizado dinámico en pantalla.
- Manejo de referencias (`useRef`) para mantener el estado de múltiples figuras.
- Limpieza del mapa eliminando formas dibujadas con un solo botón.
- Uso de hooks (`useState`, `useRef`) para controlar el flujo de datos en la interfaz.
- Mejora en la experiencia de usuario con MUI (`@mui/material`) para estilos y botones.

---

## 🧩 ¿Qué se hizo?

| Acción | Descripción |
|-------|-------------|
| ✅ Se añadió | `DrawingManager` con herramientas para polígono, polilínea y rectángulo. |
| ✅ Se añadió | Lógica para capturar coordenadas y mostrarlas al usuario. |
| ✅ Se añadió | Botón para eliminar todas las formas del mapa. |
| ✅ Se añadió | Manejadores `onPolygonComplete`, `onRectangleComplete`, `onPolylineComplete` personalizados. |
| 🧼 Se eliminó | Código innecesario del mapa base para mantenerlo modular. |
| 🧪 Se probó | Que las formas trazadas generen coordenadas precisas. |
| 💾 Se subió | A GitHub con los archivos actualizados, incluyendo `.env` en `.gitignore`. |

---

## ⚠️ Dificultades encontradas

- **Facturación de Google Maps:** El mapa no cargaba porque no estaba activada la facturación. Se resolvió habilitando una cuenta de facturación válida en Google Cloud Console.
- **Control de posición del `DrawingManager`:** Tuvimos que esperar a que `window.google.maps` estuviera disponible para evitar errores de referencia nula.
- **Persistencia de formas:** Al principio las formas no se eliminaban correctamente. Se solucionó almacenando las referencias con `useRef` y haciendo `setMap(null)` sobre cada forma.
- **Visualización de coordenadas:** Requirió mapear los resultados y renderizarlos en pantalla de manera clara y legible.

---

## 🧭 ¿Cómo mostramos las coordenadas?

Cada vez que se completa una forma, se obtiene su `path` (en el caso del polígono o polilínea) o los `bounds` (para el rectángulo), y se formatea así:

```js
polygon.getPath().getArray().map(coord => ({
  lat: coord.lat(),
  lng: coord.lng()
}));
