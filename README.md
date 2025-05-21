# 🧠 Actividad 15 - Implementación de rutas con Google Maps en React (Routes API Rendering)

## 📌 Repositorio

🔗 [Ir al repositorio en GitHub](https://github.com/Dvl-Sant/Actividad5) 


---

## ✅ ¿Qué aprendimos?

En esta actividad modularizamos la funcionalidad de dibujo en Google Maps separando el código en un componente independiente. Esto permitió una mejor organización del proyecto, mayor reutilización y un código más limpio. Además, seguimos utilizando @react-google-maps/api junto con MUI para una experiencia más intuitiva y estilizada.

---

## 👨‍💻 Temas clave que aprendimos:

Separación de lógica en componentes reutilizables de React.

Implementación del DrawingManager desde un componente externo.

Renderizado de coordenadas en tiempo real desde formas dibujadas.

Eliminación de formas usando referencias con useRef.

Buenas prácticas con el uso de hooks (useState, useEffect, useRef).

Mejora del diseño visual con Material UI.

---

## 🧩 ¿Qué se hizo?

| Acción | Descripción |
|-------|-------------|
Acción	Descripción
  ✅ Se creó	Componente DrawingShapes.jsx para encapsular la lógica de dibujo.
  ✅ Se integró	DrawingManager para polígono, polilínea y rectángulo.
  ✅ Se mostró	Coordenadas directamente en pantalla para cada forma.
  ✅ Se añadió	Botón funcional para eliminar todas las formas del mapa.
  🔁 Se reutilizó	Código de la actividad anterior, pero con enfoque modular.
  🧪 Se probó	Que cada figura se registrara correctamente con sus coordenadas.
  🧼 Se organizó	El archivo principal (MapRuta.jsx) solo con carga del mapa y del componente.
  💾 Se subió	A GitHub con control de variables en .env y limpieza de código.

---

## ⚠️ Dificultades encontradas

- **Facturación de Google Maps:** El mapa no cargaba porque no estaba activada la facturación. Se resolvió habilitando una cuenta de facturación válida en Google Cloud Console.

---
