import React, { useState } from 'react';
import './login.css';

const Login = (props) => {
    const [datos, setDatos] = useState({ correo: '', contrasena: '' });

    const manejarCambio = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch('http://localhost:3000/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                alert("¡Bienvenido a la Hermandad!");
                localStorage.setItem('token', resultado.token); 
            } else {
                alert(resultado.message || "Credenciales incorrectas");
            }
        } catch (error) {
            console.error("Error al conectar:", error);
            alert("El servidor no responde");
        }
    };

    return (
        <div className="login-fondo">
            <div className="login-tarjeta">
                <h1 className="barberia-titulo">RESERVA TU ESTILO</h1>
                <h2 className="subtitulo-dorado">INICIO DE SESIÓN</h2>
                
                <form onSubmit={manejarEnvio}>
                    <div className="campo-entrada">
                        <label>Correo Electrónico</label>
                        <input 
                            type="email" 
                            name="correo" 
                            placeholder="Ej: Ejemplo@correo.com" 
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>

                    <div className="campo-entrada">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            name="contrasena" 
                            placeholder="********" 
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>

                    <button type="submit" className="boton-dorado">
                        INGRESAR A LA HERMANDAD
                    </button>
                </form>
                <p className="registro-link">
                 ¿No eres miembro? <span onClick={props.alIrARegistro} style={{color: '#d4af37', cursor: 'pointer'}}>Únete aquí</span></p>
            </div>
        </div>
    );
};

export default Login;