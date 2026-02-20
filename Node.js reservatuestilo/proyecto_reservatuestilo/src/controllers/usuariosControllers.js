import db from '../config/db.js'; // Ajusta la ruta a tu conexión de base de datos
import bcrypt from 'bcrypt';

// 1. OBTENER TODOS LOS USUARIOS
export const obtenerUsuarios = (req, res) => {
    const query = 'SELECT id, nombre, correo, rol, direccion, telefono FROM usuarios';
    db.query(query, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(data);
    });
};

// 2. CREAR NUEVO USUARIO (Registro con nuevos campos)
export const crearUsuario = async (req, res) => {
    const { nombre, correo, contrasena, rol, direccion, telefono } = req.body;

    try {
        // Encriptar la contraseña antes de guardar
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(contrasena, salt);

        const query = `
            INSERT INTO usuarios (nombre, correo, contrasena, rol, direccion, telefono) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        const values = [nombre, correo, hash, rol || 'cliente', direccion, telefono];

        db.query(query, values, (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ message: "El correo ya está registrado" });
                }
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: "Usuario creado exitosamente", id: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ message: "Error al procesar la contraseña" });
    }
};

// 3. LOGIN DE USUARIO
export const loginUsuario = (req, res) => {
    const { correo, contrasena } = req.body;

    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(query, [correo], async (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        if (data.length === 0) return res.status(404).json({ message: "Usuario no encontrado" });

        // Comparar contraseña ingresada con el hash de la DB
        const match = await bcrypt.compare(contrasena, data[0].contrasena);
        if (!match) return res.status(401).json({ message: "Contraseña incorrecta" });

        // Si todo está bien, enviamos los datos básicos
        const { id, nombre, rol } = data[0];
        res.status(200).json({
            message: "¡Bienvenido a la Hermandad!",
            usuario: { id, nombre, rol }
        });
    });
};

// 4. ACTUALIZAR USUARIO
export const actualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, rol } = req.body;

    const query = `
        UPDATE usuarios 
        SET nombre = ?, direccion = ?, telefono = ?, rol = ? 
        WHERE id = ?
    `;

    db.query(query, [nombre, direccion, telefono, rol, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Usuario actualizado correctamente" });
    });
};

// 5. ELIMINAR USUARIO
export const eliminarUsuario = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuarios WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Usuario eliminado" });
    });
};