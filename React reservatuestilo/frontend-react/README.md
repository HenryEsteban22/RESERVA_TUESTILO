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