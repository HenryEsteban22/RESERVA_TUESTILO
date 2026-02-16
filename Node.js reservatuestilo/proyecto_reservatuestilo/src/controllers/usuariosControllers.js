import pool from "../config/db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// --- OBTENER USUARIOS ---
export const obtenerUsuarios = async(req, res) => {
  const [rows] = await pool.query("SELECT * From usuarios");
  res.json(rows);
};

// --- CREAR USUARIO (Servicio para Registro) ---
export const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contrasena, rol } = req.body;
    
    // Encriptación (Buenas prácticas de seguridad)
    const salt = await bcrypt.genSalt(10);
    const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);

    await pool.query(
      "INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES (?, ?, ?, ?)", 
      [nombre, correo, contrasenaEncriptada, rol] // <-- AQUÍ usamos la encriptada
    );
    res.json({ message: "usuario creado con seguridad" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar", error });
  }
};

// --- INICIO DE SESIÓN (Login y Token) ---
export const loginUsuario = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    if (!correo || !contrasena) {
      return res.status(400).json({ message: "Por favor complete todos los campos" });
    }

    const [rows] = await pool.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const user = rows[0];

    // Comparación de hash (Validaciones de verificación)
    const isMatch = await bcrypt.compare(contrasena, user.contrasena);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Generar Token (Tecnología obligatoria)
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

// --- ACTUALIZAR Y ELIMINAR ---
export const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contrasena, rol } = req.body;
  // Nota: Si se va a actualizar la contraseña aquí, también se debería encriptarla
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

