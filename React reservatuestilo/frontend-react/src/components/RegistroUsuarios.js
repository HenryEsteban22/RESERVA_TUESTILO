import React, { useState, useEffect } from 'react';

const RegistroUsuarios = ({ employeeToEdit, onSaveComplete }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    especialidad: '',
    experiencia: '',
    contacto: ''
  });

  // Si recibimos un empleado para editar, llenamos el formulario
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos guardados:", formData);
    // Aquí iría tu lógica para enviar a una API o base de datos
    alert("¡Estilo registrado con éxito!");
    onSaveComplete(); // Limpia la selección en App.js
    setFormData({ nombre: '', especialidad: '', experiencia: '', contacto: '' });
  };

  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: 'var(--gold-primary)', textAlign: 'center' }}>
          {employeeToEdit ? 'Editar Barbero' : 'Nuevo Barbero'}
        </h2>
        
        <label>Nombre del Maestro Barbero</label>
        <input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          placeholder="Ej. John 'The Blade' Doe"
          required 
        />

        <label>Especialidad</label>
        <select name="especialidad" value={formData.especialidad} onChange={handleChange}>
          <option value="">Selecciona una técnica</option>
          <option value="fade">Fade / Degradado</option>
          <option value="barba">Cuidado de Barba</option>
          <option value="clasico">Corte Clásico</option>
          <option value="diseno">Diseño / Freestyle</option>
        </select>

        <label>Años de Experiencia</label>
        <input 
          type="number" 
          name="experiencia" 
          value={formData.experiencia} 
          onChange={handleChange} 
          placeholder="Años en el oficio"
        />

        <label>Contacto (WhatsApp/Tel)</label>
        <input 
          type="text" 
          name="contacto" 
          value={formData.contacto} 
          onChange={handleChange} 
          placeholder="+57..."
        />

        <button type="submit">
          {employeeToEdit ? 'Actualizar Perfil' : 'Registrar en la Hermandad'}
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuarios;
