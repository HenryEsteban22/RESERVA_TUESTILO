import React, { useState, useEffect } from 'react';

const RegistroUsuarios = ({ employeeToEdit, onSaveComplete }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especialidad: '',
    experiencia: '',
    telefono: '',  
    direccion: ''  
  });

  useEffect(() => {
    if (employeeToEdit) {
      setFormData(employeeToEdit);
    }
  }, [employeeToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del barbero a guardar:", formData);
    
    // Aquí conectarás con tu ruta POST /barberos en el futuro
    alert("¡Perfil de Maestro Barbero actualizado en la base de datos!");
    
    setFormData({ nombre: '', especialidad: '', experiencia: '', telefono: '', direccion: '' });
    onSaveComplete(); 
  };

  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: 'var(--gold-primary)', textAlign: 'center' }}>
          {employeeToEdit ? 'EDITAR MAESTRO' : 'NUEVO MAESTRO BARBERO'}
        </h2>
        
        <label>Nombre del Maestro</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label>Especialidad</label>
        <select name="especialidad" value={formData.especialidad} onChange={handleChange}>
          <option value="">Selecciona una técnica</option>
          <option value="fade">Fade / Degradado</option>
          <option value="barba">Cuidado de Barba</option>
          <option value="clasico">Corte Clásico</option>
          <option value="diseno">Diseño / Freestyle</option>
        </select>

        <label>Años de Experiencia</label>
        <input type="number" name="experiencia" value={formData.experiencia} onChange={handleChange} />

        <label>Teléfono de Contacto</label>
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+57..." />

        <label>Dirección de Residencia</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />

        <button type="submit">
          {employeeToEdit ? 'ACTUALIZAR PERFIL' : 'REGISTRAR EN LA HERMANDAD'}
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuarios;