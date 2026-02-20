import React, { useState } from 'react';
import './login.css'; 

const FormularioRegistro = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
        direccion: '', 
        telefono: '',  
        rol: 'cliente' 
    });

    const manejarCambio = (e) => {
        setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoUsuario)
            });

            if (respuesta.ok) {
                alert("¡Bienvenido a la Hermandad! Registro exitoso.");
                props.alFinalizar(); 
            } else {
                alert("Error al registrar usuario");
            }
        } catch (error) {
            alert("El servidor no responde");
        }
    };

    return (
        <div className="login-tarjeta">
            <h2 className="subtitulo-dorado">CREAR NUEVA CUENTA</h2>
            <form onSubmit={manejarEnvio}>
                <div className="campo-entrada">
                    <label>Nombre Completo</label>
                    <input type="text" name="nombre" onChange={manejarCambio} required />
                </div>
                <div className="campo-entrada">
                    <label>Correo Electrónico</label>
                    <input type="email" name="correo" onChange={manejarCambio} required />
                </div>
                <div className="campo-entrada">
                    <label>Dirección</label>
                    <input type="text" name="direccion" onChange={manejarCambio} required />
                </div>
                <div className="campo-entrada">
                    <label>Teléfono</label>
                    <input type="tel" name="telefono" onChange={manejarCambio} required />
                </div>
                <div className="campo-entrada">
                    <label>Contraseña</label>
                    <input type="password" name="contrasena" onChange={manejarCambio} required />
                </div>
                <button type="submit" className="boton-dorado">REGISTRARSE</button>
                <p onClick={props.alFinalizar} style={{cursor:'pointer', color:'#d4af37', marginTop:'15px'}}>
                    ¿Ya tienes cuenta? Inicia sesión
                </p>
            </form>
        </div>
    );
};

export default FormularioRegistro;
