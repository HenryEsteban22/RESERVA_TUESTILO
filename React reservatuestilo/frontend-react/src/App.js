import React, { useState } from "react";
import RegistroUsuarios from "./components/RegistroUsuarios.js";
import ListaBarberos from "./components/ListaBarberos.js"; 
import './App.css';

function App() {
  // Estado para el barbero que se está editando
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  // Estado para almacenar la lista de todos los barberos registrados
  const [barberos, setBarberos] = useState([]);

  // Función para capturar los datos del formulario y guardarlos en la lista
  const handleSaveComplete = (nuevoBarbero) => {
    if (selectedEmployee) {
      // Si estamos editando, reemplazamos el registro viejo por el nuevo
      setBarberos(barberos.map(b => b.id === selectedEmployee.id ? nuevoBarbero : b));
    } else {
      // Si es nuevo, lo agregamos con un ID único
      setBarberos([...barberos, { ...nuevoBarbero, id: Date.now() }]);
    }
    setSelectedEmployee(null);
  };

  const handleEdit = (barbero) => {
    setSelectedEmployee(barbero);
  };

  return (
    <div className="App-container">
      <h1>Reserva tu estilo - Gestión de barberos</h1>
      
      <div className="modulos-grid">
        {/* COMPONENTE 1: El Formulario */}
        <RegistroUsuarios
          employeeToEdit={selectedEmployee}
          onSaveComplete={handleSaveComplete}
        />

        <hr />

        {/* COMPONENTE 2: La Tabla/Lista */}
        <ListaBarberos 
          datos={barberos} 
          onEdit={handleEdit} 
        />
      </div>
    </div>
  );
}

export default App;
