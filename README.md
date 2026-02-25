# ARSITE Website

Sitio web corporativo de ARSITE desarrollado con Laravel y Vue.js.
Este proyecto presenta la información institucional de la empresa, sus servicios, soluciones tecnológicas, socios y medios de contacto.

---

## Tecnologías utilizadas

### Backend

* Laravel 10+
* PHP 8+
* Blade (para layout base)
* Vite (build tool)

### Frontend

* Vue 3
* JavaScript (ES6+)
* CSS3
* Componentes reutilizables

### Herramientas

* Node.js
* NPM
* Git
* Vite

---

## Estructura del proyecto

```
resources/
│
├── js/
│   ├── components/
│   │   ├── Hero.vue
│   │   ├── Footer.vue
│   │   └── Navbar.vue
│   │
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Partners.vue
│   │   └── Contact.vue
│   │
│   └── app.js
│
├── views/
│   └── app.blade.php
│
public/
└── img/
```

---

## Componentes principales

### Hero.vue

Componente reutilizable que muestra:

* Imagen de fondo
* Título dinámico
* Subtítulo opcional

Uso:

```vue
<Hero
  title="Nosotros"
  subtitle="18 años de experiencia"
  image="/img/nosotros.jpg"
/>
```

---

### Navbar.vue

Barra de navegación principal del sitio.

Incluye acceso a:

* Inicio
* Nosotros
* Partners
* Contacto

---

### Footer.vue

Pie de página global reutilizable en todo el sitio.

---

## Páginas

### Home

Página principal del sitio.

### About

Contiene:

* Información de la empresa
* Misión
* Visión
* Valores
* Premios

### Partners

Información de socios tecnológicos.

### Contact

Información de contacto.

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/arsite.git
```

---

### 2. Instalar dependencias Laravel

```bash
composer install
```

---

### 3. Instalar dependencias frontend

```bash
npm install
```

---

### 4. Ejecutar entorno de desarrollo

```bash
npm run dev
```

---

### 5. Ejecutar servidor Laravel

```bash
php artisan serve
```

---

## Acceso

Abrir en navegador:

```
http://localhost:8000
```

---

## Características

* Arquitectura modular basada en componentes
* Componentes reutilizables
* Diseño responsive
* Separación backend y frontend
* Código escalable

---

## Autor

Desarrollado para ARSITE

---

## Licencia

Uso interno corporativo.
