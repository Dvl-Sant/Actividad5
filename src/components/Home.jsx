import { useNavigate } from 'react-router-dom'
import '../index.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', }}>Bienvenido a la Página Principal</h1>
      <p style={{ color: '#ccc' }}>Esta es una app hecha con React Router DOM.</p>
      <button 
        onClick={() => navigate('/about')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#008CBA',
          border: 'none',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '1rem'
        }}
      >
        Ir a Acerca de
      </button>
    </div>
  )
}

export default Home
