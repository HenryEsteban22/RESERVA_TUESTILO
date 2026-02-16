import pool from "../config/db.js";

export const obtenerUsuarios = async(req, res) => {
 const [rows] = await pool.query("SELECT * From usuarios");
 res.json(rows);
};

export const crearUsuario = async (req, res) => {
 const { nombre, correo, contrasena, rol } = req.body;
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