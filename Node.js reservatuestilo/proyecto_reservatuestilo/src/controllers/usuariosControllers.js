import pool from "../config/db.js";

export const obtenerUsuarios = async(req, res) => {
 const [rows] = await pool.query("SELECT * From usuarios");
 res.json(rows);
};

export const crearUsuario = async (req, res) => {
 const { nombre, correo, contrasena, rol } = req.body;
 // Antes de hacer el INSERT:
const salt = await bcrypt.genSalt(10);
const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);
// En el query usa 'contrasenaEncriptada' en lugar de 'contrasena'
 await pool.query("INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES (?, ?, ?, ?)", [
  nombre,
  correo,
  contrasena,
  rol,
 ]);
 res.json({ message: "usuario creado" });
};

export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const {nombre, correo, contrasena, rol } = req.body;
  await pool.query(
    "UPDATE usuarios SET nombre = ?, correo = ?, contrasena = ?, rol = ? WHERE id_usuario = ?",
    [nombre, correo, contrasena, rol, id]
  );
  res.json({ message: "Usuario actualizado" });
};

export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM usuarios WHERE id_usuario = ?", [id]);
  res.json({ message: "Usuario eliminado" });
};

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// 1. Servicio para Inicio de Sesión (Cumple Punto 2 y 3)
export const loginUsuario = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // Validaciones básicas de verificación (Punto 3)
        if (!correo || !contrasena) {
            return res.status(400).json({ message: "Por favor complete todos los campos" });
        }

        // Buscar el usuario en la base de datos
        const [rows] = await pool.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const user = rows[0];

        // Comparar contraseña encriptada (Seguridad obligatoria)
        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        // Generar Token de autenticación (JWT)
        const token = jwt.sign(
            { id: user.id_usuario, rol: user.rol }, 
            process.env.JWT_SECRET || 'secretkey123', 
            { expiresIn: '1h' }
        );

        res.json({
            message: "Inicio de sesión exitoso",
            token,
            user: { nombre: user.nombre, rol: user.rol }
        });

    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};