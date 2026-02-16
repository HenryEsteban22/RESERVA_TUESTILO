import express from 'express';
import { 
    obtenerUsuarios, 
    crearUsuario, 
    actualizarUsuario, 
    eliminarUsuario, 
    loginUsuario // <-- Asegúrate de importar la nueva función
} from '../controllers/usuariosControllers.js';

const router = express.Router();

// Rutas existentes
router.get('/', obtenerUsuarios);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

// NUEVA RUTA PARA EL LOGIN (Punto 2 de la evidencia)
router.post('/login', loginUsuario); 

export default router;