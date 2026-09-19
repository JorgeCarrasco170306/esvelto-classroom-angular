# Esvelto Classroom

**Esvelto Classroom** es una plataforma educativa enfocada en la gestión de estudiantes, profesores e instituciones, con herramientas para administrar y evaluar asignaciones académicas.

Este repositorio contiene el **frontend web** de Esvelto Classroom, desarrollado con **Angular** y diseñado para consumir la API REST del backend de la aplicación.

## 🚀 Tecnologías

* **Angular**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Axios**
* **Angular Router**
* **Lucide Icons**

## ✨ Características

* 🔐 Autenticación de usuarios
* 📝 Registro e inicio de sesión
* 👨‍🏫 Gestión de profesores
* 👨‍🎓 Gestión de estudiantes
* 🏫 Gestión de instituciones
* 📚 Gestión de asignaciones
* 🤖 Preparado para funcionalidades de evaluación asistida por IA
* 🌓 Soporte para temas claro y oscuro
* 🔄 Integración con API REST

## 🏗️ Arquitectura

El proyecto está organizado siguiendo una estructura orientada a funcionalidades:

```text
src/
├── app/
├── home/
│   ├── auth/
│   │   ├── pages/
│   │   ├── services/
│   │   └── models/
│   └── ...
├── services/
│   └── axios/
└── ...
```

La aplicación utiliza servicios para separar la comunicación con el backend de los componentes encargados de la interfaz.

## 🔌 Backend

El frontend consume la API REST desarrollada con **Spring Boot**.

```text
Angular
   │
   │ HTTP / REST
   ▼
Spring Boot API
   │
   ▼
PostgreSQL
```

Backend:

`https://github.com/JorgeCarrasco170306/esvelto-classroom-spring`

> El backend debe estar ejecutándose para utilizar las funcionalidades que requieren comunicación con la API.

## 🛠️ Instalación

Clona el repositorio:

```bash
git clone <repository-url>
cd esvelto-classroom
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4200
```

## 📦 Build

Para generar una versión de producción:

```bash
ng build
```

Los archivos generados estarán dentro de:

```text
dist/
```

## 🔐 Configuración de la API

La URL base del backend debe apuntar a la instancia de Spring Boot que esté ejecutándose.

Ejemplo:

```text
http://localhost:8080/api
```

Si utilizas una instancia diferente del backend, modifica la configuración correspondiente del cliente HTTP.

## 📌 Estado del proyecto

🚧 **En desarrollo**

Esvelto Classroom continúa en desarrollo. Algunas funcionalidades y módulos pueden cambiar a medida que evoluciona la arquitectura de la aplicación.

## 👨‍💻 Autor

**Jorge Carrasco**

Proyecto desarrollado como parte de mi aprendizaje y práctica de desarrollo **Full Stack**, utilizando Angular en el frontend y Spring Boot en el backend.
