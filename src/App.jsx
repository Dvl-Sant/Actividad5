import { useState, useEffect, createContext, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

/**
 * Contexto para gestionar el tema de la aplicación.
 * 
 * @component
 * @example
 * // Uso dentro de un componente
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
const ThemeContext = createContext();

/**
 * Proveedor del contexto de tema, que permite cambiar entre "light" y "dark".
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Los componentes hijos que consumen el contexto.
 * @returns {JSX.Element} El componente ThemeProvider con el contexto.
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Componente principal de la aplicación.
 * 
 * Este componente maneja el estado de los usuarios, la lógica del contador, y
 * permite cambiar entre el tema claro y oscuro.
 * 
 * @returns {JSX.Element} El componente App.
 */
const App = () => {
  const [count, setCount] = useState(0);

  /**
   * Estado que almacena los usuarios obtenidos de la API.
   * 
   * @type {Array<Object>}
   */
  const [usuarios, setUsuarios] = useState([]);

  /**
   * Efecto que se ejecuta al montar el componente. Realiza una petición
   * a la API para obtener los usuarios y actualiza el estado.
   */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error('Error al obtener los usuarios:', error));
  }, []);

  /**
   * Incrementa el contador, asegurándose de que no supere el valor 10.
   */
  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("El contador no puede superar 10");
    }
  };

  return (
    <>
      {/* Tabla de usuarios usando MUI */}
      <TableContainer component={Paper} style={{ marginTop: '20px', maxWidth: '650px', margin: '0 auto' }}>
        <Table aria-label="Tabla de usuarios">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Correo</TableCell>
              <TableCell align="right">Ciudad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell component="th" scope="row">{usuario.name}</TableCell>
                <TableCell align="right">{usuario.email}</TableCell>
                <TableCell align="right">{usuario.address.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default App;
export { ThemeProvider };
