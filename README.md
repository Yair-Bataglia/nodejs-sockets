# CRUD con WebSockets

Este proyecto es una aplicación CRUD en tiempo real construida con Node.js, Express y WebSockets. Los usuarios pueden crear, leer, actualizar y eliminar notas con una interfaz interactiva, todo actualizado en tiempo real gracias a los sockets.

## Tecnologías utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/UUID-8B0000?style=for-the-badge&logo=uuid&logoColor=white" alt="UUID">
</p>


## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- Node.js (v14 o superior)
- npm (v6 o superior)


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

## Uso

1. Inicia la aplicación:

   ```bash
   npm start
   ```

2. Abre tu navegador y accede a `http://localhost:3000`.


## Estructura del proyecto

```
/src
 |-- index.js             # Archivo principal del servidor
 |-- /public              # Archivos estáticos
       |-- index.html     # Interfaz del usuario
       |-- main.css       # Estilos CSS
       |-- main.js        # Lógica del cliente
       |-- sockets.js     # Configuración de sockets en el cliente
       |-- ui.js          # Funciones para renderizar la interfaz
```


## Funcionalidades principales

- **Crear notas**: Agregar nuevas notas con título y descripción.
- **Leer notas**: Visualizar todas las notas en tiempo real.
- **Actualizar notas**: Modificar el título y la descripción de una nota.
- **Eliminar notas**: Borrar una nota específica.
- **Sincronización en tiempo real**: Cambios reflejados instantáneamente para todos los usuarios conectados.


## Contribuciones

Las contribuciones son bienvenidas

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
 

