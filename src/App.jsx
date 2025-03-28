import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [count, setCount] = useState(0);

  // Array de personas con más de 5 elementos (2 menores de edad)
  const personas = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 25 },
    { nombre: 'María', apellido: 'Gómez', edad: 17 }, // Menor de edad
    { nombre: 'Carlos', apellido: 'López', edad: 30 },
    { nombre: 'Ana', apellido: 'Martínez', edad: 16 }, // Menor de edad
    { nombre: 'Luisa', apellido: 'Rodríguez', edad: 22 },
    { nombre: 'Pedro', apellido: 'Sánchez', edad: 19 }
  ];

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("El contador no puede superar 10");
    }
  };

  return (
    <>


      {/* Tabla de personas usando MUI */}
      <TableContainer component={Paper} style={{ marginTop: '20px', maxWidth: '650px', margin: '0 auto' }}>
        <Table aria-label="Tabla de personas">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Apellido</TableCell>
              <TableCell align="right">Edad</TableCell>
              <TableCell align="right">Mayor de edad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personas.map((persona) => (
              <TableRow
                key={`${persona.nombre}-${persona.apellido}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {persona.nombre}
                </TableCell>
                <TableCell align="right">{persona.apellido}</TableCell>
                <TableCell align="right">{persona.edad}</TableCell>
                <TableCell align="right">{persona.edad >= 18 ? 'Sí' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;