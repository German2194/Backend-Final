# 🛒 Proyecto Final Backend - Ecommerce

## 📌 Descripción
Este proyecto consiste en el desarrollo y mejora de un servidor backend para un ecommerce, implementando buenas prácticas de arquitectura, patrones de diseño y control de acceso.

El objetivo principal es construir una aplicación escalable, segura y organizada, enfocada en la lógica de negocio.

---

## 🚀 Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB / Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv

---

## 🧱 Arquitectura del Proyecto
El proyecto está estructurado siguiendo una arquitectura por capas:

- Routes: Manejo de endpoints
- Controllers: Lógica de entrada/salida
- Services: Lógica de negocio
- Repository: Abstracción de acceso a datos
- DAO: Interacción directa con la base de datos
- Models: Esquemas de MongoDB

---

## 🧩 Patrón Repository
Se implementa el patrón Repository para desacoplar la lógica de negocio del acceso a datos.

Esto permite:
- Cambiar la base de datos sin afectar la lógica
- Mejorar la mantenibilidad
- Facilitar testing

---

## 🔐 Autenticación y Autorización
El sistema utiliza JWT para la autenticación de usuarios.

### Roles implementados:
- User: Usuario común
- Admin: Administrador con permisos completos

### Seguridad:
- Encriptación de contraseñas con bcrypt
- Middleware de autorización por roles
- Protección de rutas sensibles

---

## ⚠️ Ruta /current
Se modificó la ruta `/current` para evitar exponer información sensible del usuario.

Ahora solo devuelve:
- Nombre
- Email
- Rol

---

## 📦 Funcionalidades Principales
- Registro y login de usuarios
- Gestión de productos
- Carrito de compras
- Sistema de roles
- Protección de rutas

---

## 🛠️ Instalación

1. Clonar el repositorio:
git clone <URL_DEL_REPO>

2. Instalar dependencias:
npm install

3. Configurar variables de entorno:
Crear un archivo `.env` con:
PORT=3000
MONGO_URI=tu_url_de_mongodb
JWT_SECRET=tu_clave_secreta

4. Ejecutar el servidor:
npm run dev

---

## 📬 Endpoints principales

### Auth
- POST /api/sessions/register
- POST /api/sessions/login
- GET /api/sessions/current

### Products
- GET /api/products
- POST /api/products (Admin)

### Cart
- GET /api/carts/:cid
- POST /api/carts/:cid/product/:pid

---

## 🧪 Buenas Prácticas Implementadas
- Separación de responsabilidades
- Uso de middlewares
- Manejo de errores
- Código modular

---

## 📈 Posibles Mejoras
- Implementar testing (Jest)
- Documentación con Swagger
- Deploy en la nube
- Integración con frontend

---

## 👨‍💻 Autor
Proyecto desarrollado como entrega final del curso de Backend.

---

## 📄 Licencia
Uso educativo.
