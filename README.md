# Proyecto Integrador ISW-306

## Etapa 4: Cierre e Integración del Sistema

### Descripción
Este proyecto corresponde a la etapa final del sistema de gestión, donde se integra el frontend y backend en una aplicación web funcional completa. Incluye autenticación de usuarios, interfaz interactiva y un sistema CRUD conectado a una API REST.

---

## Tecnologías utilizadas
- HTML5, CSS3 y JavaScript
- Bootstrap 5
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Swagger
- LocalStorage / SessionStorage

---

## Funcionalidades del sistema

### 🔐 Autenticación
- Inicio de sesión de usuarios
- Validación básica de credenciales
- Manejo de sesión con `sessionStorage`
- Protección de acceso al dashboard

---

### 👤 Gestión de usuarios (CRUD)
- Crear usuarios (POST)
- Consultar usuarios (GET)
- Actualizar usuarios (PUT)
- Eliminar usuarios (DELETE)

---

### 🖥 Interfaz de usuario
- Dashboard con panel de control
- Visualización de usuarios en tabla
- Formulario de registro
- Diseño responsivo con Bootstrap

---

### 🔗 Integración backend
- API REST desarrollada en ASP.NET Core
- Conexión a base de datos SQL Server
- Documentación mediante Swagger

---

## Base de datos
Se utiliza SQL Server con Entity Framework Core, aplicando migraciones para la creación y gestión de tablas.

---

## Flujo del sistema

1. El usuario accede al sistema mediante `index.html`
2. Inicia sesión con sus credenciales
3. Si es válido, es redirigido al `Dashboard`
4. Desde el dashboard puede gestionar usuarios (CRUD)
5. Los datos se almacenan en la base de datos a través de la API

---

## Instalación

1. Clonar el repositorio
2. Abrir el proyecto en Visual Studio
3. Configurar la cadena de conexión en `appsettings.json`
4. Ejecutar la API
5. Abrir el frontend con Live Server
6. Iniciar sesión para acceder al sistema

---

## Estado del proyecto
✔ Login funcional  
✔ Dashboard interactivo  
✔ CRUD completo  
✔ Backend conectado  
✔ Sistema integrado y funcional  

---

## Participantes del Grupo 15

- Anyiri Rafael Jáquez Martínez – ID: 100063657  
- Juan Alberto Marte Rodríguez – ID: 100060991  
- Albert Charles Stubbs Camacho – ID: 100078775  
- Daniela Cabral Castillo – ID: 100076597  
- Elian Dominguez – ID: 100072737  

---

## Autor
Proyecto académico - ISW-306