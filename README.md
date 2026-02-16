# Mi Proyecto reserva tu estilo 💈

## Evidencia: Codificación de Módulos del Software - Reserva Tu Estilo
**ID de Evidencia:** GA7-220501096-AA2-EV01

## 📋 Descripción
Este módulo realiza la gestión de usuarios (CRUD) para el proyecto "Reserva Tu Estilo", utilizando Node.js y MySQL. Se ha implementado siguiendo una arquitectura modular (MVC) para cumplir con los estándares de codificación solicitados.

## 🛠️ Tecnologías Utilizadas
* **Entorno:** Node.js
* **Framework:** Express
* **Base de Datos:** MySQL
* **Versionamiento:** Git / GitHub

## 🚀 Pruebas de Funcionamiento (CRUD en Postman)

### 1. Inserción (Create)
Permite registrar nuevos usuarios en la base de datos.
![Inserción de Usuario](./img/postman_post.png)

### 2. Consulta (Read)
Muestra la lista de usuarios registrados.
![Consulta de Usuarios](./img/postman_get.png)

### 3. Actualización (Update)
Modifica la información de un usuario existente mediante su ID.
![Actualización de Usuario](./img/postman_put.png)

### 4. Eliminación (Delete)
Elimina un registro de la base de datos.
![Eliminación de Usuario](./img/postman_delete.png)


---

## 💻 Evidencia AA3: Codificación de Módulos (Standalone/Web)

### ⚛️ Tecnologías Utilizadas: React.js
React es una biblioteca de JavaScript especializada en la construcción de **Interfaces de Usuario (UI)** de forma declarativa. Sus pilares fundamentales son:

* **Declarativa**: Permite describir cómo debe verse la interfaz en un estado específico; React se encarga de actualizar eficientemente el DOM cuando los datos cambian.
* **Basada en Componentes**: La interfaz se fragmenta en bloques independientes y reutilizables, lo que facilita el mantenimiento y la escalabilidad del proyecto.
* **Reactividad**: Gracias a hooks como `useState` y `useEffect`, la interfaz reacciona automáticamente a los cambios en la información (estado), garantizando una experiencia de usuario fluida.

### 🌐 Arquitectura de Conexión
El sistema opera bajo una arquitectura cliente-servidor para garantizar la persistencia de datos:

1.  **Frontend (React)**: Realiza peticiones HTTP (vía `fetch`) hacia los endpoints de la API en el puerto 3000.
2.  **Backend (Node.js/Express)**: Procesa las solicitudes, aplica la lógica de negocio y gestiona la comunicación con el motor de base de datos.
3.  **Database (MySQL)**: Almacena de forma segura los registros de la tabla `usuarios` y `barberos`.

### 📸 Formulario en Funcionamiento
A continuación, se muestra la interfaz de registro operando en tiempo real y conectada al backend:

![imagen del formulario.jpeg](\reservatuestilo\img)


---

### 🛠️ Estructura del Código (Backend)
Para cumplir con los criterios de evaluación de la **AA5-EV01**, el backend se ha estructurado de forma modular:

### 1. Conexión a MySQL (`db.js`)
Configuración del pool de conexiones utilizando variables de entorno para mayor seguridad:

javascript
import mysql from "mysql2/promise";
import 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default pool;



## Evidencia AA5: Diseño y Desarrollo de Servicios Web
En esta fase se implementaron los servicios necesarios para la comunicación entre el Frontend y el Backend.

## 🚀 Pruebas de Funcionamiento (API REST & Seguridad)

### 1. Registro de Usuario (Encriptado)
Permite registrar nuevos usuarios. La contraseña se encripta con **Bcrypt** antes de ir a la base de datos.
![Registro de Usuario](./img/POST%20usuario%20creado.jpeg)

### 2. Inicio de Sesión y Token (JWT)
Servicio de autenticación que genera un token de seguridad para el usuario.
![Login y JWT](./img/Inicio%20de%20sesión.jpeg)

### 3. Validación de Datos
Prueba de validación donde el sistema rechaza registros incompletos y verifica la existencia del usuario (Punto 3 de la guía).
![Validaciones SQL](./img/MYSQL%20validación.jpeg)
![Validaciones Postman](./img/POST%20usuario%20no%20encontrado.jpeg)

**Aprendiz:** Henry Esteban Morales Cuellar  
**Programa:** ADSO