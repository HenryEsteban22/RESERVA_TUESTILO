import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 1. Importar cors
import usuariosRoutes from "./routes/usuarios.js";

dotenv.config();

const app = express();

app.use(cors());// 2. Habilitar CORS para todas las rutas
app.use(express.json());

app.use("/usuarios", usuariosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});