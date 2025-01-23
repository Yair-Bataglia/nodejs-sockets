# CRUD con WebSockets

Este proyecto es una aplicación CRUD en tiempo real construida con Node.js, Express y WebSockets. Los usuarios pueden crear, leer, actualizar y eliminar notas con una interfaz interactiva, todo actualizado en tiempo real gracias a los sockets.

## Tecnologías utilizadas

- **Node.js**: Plataforma de desarrollo backend.
- **Express**: Framework web para Node.js.
- **WebSockets (Socket.io)**: Comunicación bidireccional en tiempo real entre el cliente y el servidor.
- **Bootstrap**: Framework de diseño CSS para un estilo rápido y responsivo.
- **UUID**: Generador de identificadores únicos para las notas.

---

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- Node.js (v14 o superior)
- npm (v6 o superior)

---

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno creando un archivo `.env` en el directorio `src` y agregando lo siguiente:

   ```env
   PORT=3000
   ```

---

## Uso

1. Inicia la aplicación:

   ```bash
   npm start
   ```

2. Abre tu navegador y accede a `http://localhost:3000`.

---

## Estructura del proyecto

```
/src
 |-- .env                 # Variables de entorno
 |-- index.js             # Archivo principal del servidor
 |-- /public              # Archivos estáticos
       |-- index.html     # Interfaz del usuario
       |-- main.css       # Estilos CSS
       |-- main.js        # Lógica del cliente
       |-- sockets.js     # Configuración de sockets en el cliente
       |-- ui.js          # Funciones para renderizar la interfaz
```

---

## Despliegue en Render

1. **Sube tu proyecto a un repositorio Git (GitHub, GitLab, etc.).**

2. En Render:
   - Crea un nuevo servicio de **Web Service**.
   - Conecta tu repositorio.
   - Configura los siguientes campos:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Agrega la variable de entorno `PORT` con el valor `3000`.

3. Una vez completado, Render se encargará de construir y desplegar tu aplicación. Obtendrás una URL para acceder a tu proyecto en la nube.

---

## Funcionalidades principales

- **Crear notas**: Agregar nuevas notas con título y descripción.
- **Leer notas**: Visualizar todas las notas en tiempo real.
- **Actualizar notas**: Modificar el título y la descripción de una nota.
- **Eliminar notas**: Borrar una nota específica.
- **Sincronización en tiempo real**: Cambios reflejados instantáneamente para todos los usuarios conectados.

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu función o bugfix:

   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git commit -m "Agrega una nueva funcionalidad"
   ```

4. Haz push de la rama:

   ```bash
   git push origin mi-nueva-funcionalidad
   ```

5. Crea un Pull Request.

---

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

---

## Autor

**[Tu Nombre]**  
Describe brevemente tu perfil o agrega un enlace a tus redes.

