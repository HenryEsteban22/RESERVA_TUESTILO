Evidencia GA7-220501096-AA5-EV01: Diseño y desarrollo de servicios web
En esta fase del proyecto, se ha integrado la comunicación entre el cliente (React) y el servidor (Node.js) mediante servicios web REST.

1. Servicios Web de Registro e Inicio de Sesión
Servicio de Registro: Se habilitó un endpoint POST /usuarios en el backend para recibir y procesar los datos de nuevos barberos.

Consumo de API: El componente RegistroUsuarios.js utiliza la función fetch para enviar los datos al servidor en http://localhost:3000/usuarios.

2. Validaciones de Verificación
Validación de campos: Se implementaron atributos required en los inputs y una lógica de control en el handleSubmit para asegurar que ningún campo obligatorio se envíe vacío.

Feedback al usuario: El sistema genera alertas visuales para confirmar el éxito o error del registro.

3. Herramientas de Versionamiento
Control de Versiones: Se utilizó Git para documentar el progreso mediante commits descriptivos.

GitHub: El código actualizado se encuentra disponible en este repositorio para su evaluación.

# Mi Proyecto reserva tu estilo 💈

## Evidencia: Codificación de Módulos del Software - Reserva Tu Estilo
**ID de Evidencia:** GA7-220501096-AA5-EV01

## 📋 Descripción
Este módulo realiza la gestión de usuarios (CRUD) y la implementación de servicios de autenticación segura para el proyecto "Reserva Tu Estilo", utilizando Node.js, MySQL y React.

## 🛠️ Tecnologías Utilizadas
* **Backend:** Node.js / Express
* **Base de Datos:** MySQL
* **Seguridad:** JSON Web Token (JWT) y Bcryptjs
* **Frontend:** React.js
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


## Evidencia AA3: Codificación de Módulos (Standalone/Web) reserva tu estilo 💈

Este repositorio contiene el desarrollo del Frontend, para el sistema reserva tu estilo, realizado en **React**, enfocado en la experiencia del usuario (UX) y la interfaz de gestión para la barbería.

## 🚀 Funcionalidades de la Interfaz

La aplicación permite la interacción segura de los usuarios y la administración del personal mediante las siguientes vistas:

* **Autenticación de Usuarios:** Formulario de inicio de sesión con validaciones y mensajes de bienvenida personalizados.
* **Gestión de Personal:** Interfaz dedicada para el registro de nuevos maestros barberos, incluyendo especialidad y datos de contacto.
* **Consumo de API:** Integración de componentes con servicios de autenticación y registro.

## 📸 Evidencias de la Interfaz (UI)

### 1. Inicio de Sesión (Login)
Interfaz de acceso donde el usuario ingresa sus credenciales. Se observa la validación exitosa con el mensaje "¡Bienvenido a la Hermandad!".

![Interfaz de Login](./img/Inicio%20de%20sesión%20en%20REACT.jpeg)

### 2. Registro de Nuevo Barbero
Vista de formulario avanzada para la gestión de empleados, permitiendo capturar nombre y especialidad. Se muestra la confirmación "¡Estilo registrado con éxito!".

![Registro de Barbero](./img/Registro%20usuario%20REACT.jpeg)

## 🛠️ Tecnologías Utilizadas
* **React.js:** Para la construcción de la arquitectura de componentes.
* **Manejo de Estados:** Gestión de formularios y alertas de confirmación.
* **Estilos Personalizados:** Diseño oscuro adaptado a la identidad de la marca.

**Aprendiz:** Henry Esteban Morales Cuellar
**Programa:** ADSO