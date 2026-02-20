import React, { useState } from 'react';
import Login from './components/login';
import FormularioRegistro from './components/FormularioRegistro';
import RegistroUsuarios from './components/RegistroUsuarios'; 
import ListaBarberos from './components/ListaBarberos';
import './App.css';

function App() {
  const [vista, setVista] = useState('login');
  const [barberos, setBarberos] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSaveComplete = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="App-container">
      {/* BOTÓN DE ACCESO RÁPIDO (Solo para desarrollo) */}
      <button 
        onClick={() => setVista(vista === 'gestion' ? 'login' : 'gestion')}
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: 2000,
          padding: '8px 12px',
          backgroundColor: '#d4af37',
          color: 'black',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        {vista === 'gestion' ? 'VOLVER AL INICIO' : 'MODO GESTIÓN (DEBUG)'}
      </button>

      {/* VISTA DE LOGIN */}
      {vista === 'login' && (
        <Login 
          alIrARegistro={() => setVista('registro')} 
          alLoguear={() => setVista('gestion')} 
        />
      )}

      {/* VISTA DE REGISTRO DE USUARIOS */}
      {vista === 'registro' && (
        <div className="login-fondo">
          <FormularioRegistro alFinalizar={() => setVista('login')} />
        </div>
      )}

      {/* VISTA DE GESTIÓN DE BARBEROS */}
      {vista === 'gestion' && (
        <div className="gestion-container">
          <button 
            className="boton-cerrar" 
            onClick={() => setVista('login')}
            style={{float: 'right', margin: '20px'}}
          >
            CERRAR SESIÓN
          </button>
          
          <h1 className="barberia-titulo" style={{textAlign: 'center', color: '#d4af37', marginTop: '40px'}}>
            GESTIÓN DE MAESTROS BARBEROS
          </h1>
          
          <div className="modulos-grid">
            <RegistroUsuarios 
              employeeToEdit={selectedEmployee}
              onSaveComplete={handleSaveComplete}
            />
            <hr />
            <ListaBarberos 
              datos={barberos} 
              onEdit={handleEdit} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;