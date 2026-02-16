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


## Evidencia AA3: Codificación de Módulos (Standalone/Web)
(Aquí dejas lo que ya tenías escrito...)

---

## Evidencia AA5: Diseño y Desarrollo de Servicios Web
En esta fase se implementaron los servicios necesarios para la comunicación entre el Frontend y el Backend.

### 1. Servicios de Registro (Punto 1 y 2 de la Guía)
- Se creó una API REST usando Node.js y Express en el puerto 3000.
- Endpoint de Registro: `POST /usuarios` para almacenar nuevos barberos.

### 2. Validaciones (Punto 3 de la Guía)
- Se implementaron validaciones en el Frontend (React) usando el atributo `required`.
- Se añadieron verificaciones en el Backend para asegurar que los campos `nombre` y `contacto` no lleguen vacíos.

### 3. Versionamiento (Punto 4 de la Guía)
- Uso de Git para el control de versiones y despliegue en GitHub.
---
**Aprendiz:** Henry Esteban Morales Cuellar
**Programa:** ADSO