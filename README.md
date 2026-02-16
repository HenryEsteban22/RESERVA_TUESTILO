# Mi Proyecto reserva tu estilo 💈

## Evidencia: Codificación de Módulos del Software - Reserva Tu Estilo
**ID de Evidencia:** GA7-220501096-AA5-EV01

## 📋 Descripción
Este módulo realiza la gestión de usuarios y autenticación para el proyecto "Reserva Tu Estilo", utilizando Node.js y MySQL. Se implementó una arquitectura modular (MVC) y servicios web REST con seguridad JWT.

## 🛠️ Tecnologías Utilizadas
* **Backend:** Node.js / Express
* **Base de Datos:** MySQL
* **Seguridad:** JSON Web Token (JWT) y Bcryptjs
* **Frontend:** React.js

## ⚙️ Configuración y Ejecución
Para ejecutar este proyecto, configura tu archivo `.env` en la raíz del backend con:
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- `JWT_SECRET` (Llave secreta para los tokens)

### Pasos:
1. Instalar dependencias: `npm install`
2. Iniciar servidor: `npm start`

---

## 📸 Interfaz de Usuario (React)
A continuación, se muestra el formulario de registro operando en tiempo real y conectado al backend:

![Formulario de Registro](./img/imagen%20del%20formulario.jpeg) 

---

## 🚀 Pruebas de Funcionamiento (Servicios Web AA5)

### 1. Registro de Usuario (Punto 1 de la Guía)
Servicio `POST /usuarios` que recibe los datos y encripta la contraseña con **Bcrypt** antes de guardarla.
![Registro Exitoso](./img/POST%20usuario%20creado.jpeg)

### 2. Inicio de Sesión y Token JWT (Punto 2 de la Guía)
Servicio `POST /usuarios/login` que valida credenciales y retorna un **Token de autenticación**.
![Login y Token](./img/Inicio%20de%20sesión.jpeg)

### 3. Validaciones y Seguridad (Punto 3 de la Guía)
* **Validación de campos**: El sistema rechaza registros incompletos.
* **Integridad de datos**: Las contraseñas son ilegibles en la base de datos.
![Validación SQL](./img/MYSQL%20validación.jpeg)
![Error Usuario](./img/POST%20usuario%20no%20encontrado.jpeg)

---

**Aprendiz:** Henry Esteban Morales Cuellar
**Programa:** ADSO