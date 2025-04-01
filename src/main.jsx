import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Ahora sí funciona porque App es export default
import { ThemeProvider } from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
