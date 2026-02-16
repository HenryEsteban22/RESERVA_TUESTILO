import React from 'react';

const ListaBarberos = ({ barberos, onEdit }) => {
  return (
    <div className="lista-container">
      <h2 style={{ color: 'var(--gold-primary)', textAlign: 'center', marginTop: '40px' }}>
        Nuestros Barberos
      </h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Experiencia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {barberos?.length > 0 ? (
            barberos.map((barbero, index) => (
              <tr key={index}>
                <td>{barbero.nombre}</td>
                <td>{barbero.especialidad}</td>
                <td>{barbero.experiencia} años</td>
                <td>
                  <button 
                    onClick={() => onEdit(barbero)}
                    style={{ padding: '5px 10px', fontSize: '0.8rem', width: 'auto' }}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                No hay barberos registrados aún.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListaBarberos;