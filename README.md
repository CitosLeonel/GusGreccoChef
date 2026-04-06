# 🍽️ Gustavo Grecco — Private Chef Portfolio

Sitio web profesional desarrollado para un chef privado argentino con experiencia en restaurantes de alta gama y clientes UHNW en Madrid y Nueva York. El objetivo del proyecto fue crear una presencia digital elegante, rápida y multilingüe que refleje el nivel y la estética de su cocina.

🔗 **[Ver sitio en vivo](https://gusgreccochef.com/)** 

---

## 📸 Vista previa




---

## ✨ Funcionalidades

- **Hero section** con foto de portada y presentación del chef
- **Galería interactiva** con 25 platos usando GLightbox (lightbox con títulos personalizados)
- **Sección de servicios** con descripción de experiencias culinarias privadas
- **Blog dinámico** renderizado desde JavaScript
- **Formulario de contacto** en página separada
- **Soporte multiidioma** (Español / Inglés) mediante sistema i18n propio
- **Diseño 100% responsive** adaptado a mobile, tablet y desktop
- **Deploy en Netlify** con redirecciones configuradas

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica del sitio |
| CSS3 | Estilos personalizados y diseño visual |
| JavaScript (Vanilla) | Lógica de i18n, blog dinámico y comportamientos |
| Bootstrap 5.3 | Grid system y componentes responsivos |
| Bootstrap Icons | Iconografía (redes sociales, UI) |
| GLightbox | Galería con lightbox interactivo |
| Google Fonts (Cormorant) | Tipografía display elegante |
| Netlify | Hosting y manejo de redirecciones |

---

## 📁 Estructura del proyecto

```
GusGreccoChef/
├── index.html          # Página principal
├── _redirects          # Configuración de redirecciones para Netlify
├── css/
│   └── styles.css      # Estilos globales
├── js/
│   ├── main.js         # Lógica principal
│   ├── i18n.js         # Sistema de internacionalización
│   └── blog.js         # Renderizado dinámico del blog
├── locales/            # Archivos de traducción (ES / EN)
├── pages/
│   └── form.html       # Página de contacto
└── img/
    ├── hero/           # Imágenes de portada
    └── gallery/        # Imágenes de la galería (thumb + large)
```

---

## 🌐 Internacionalización (i18n)

El sitio cuenta con un sistema de traducción propio en JavaScript que carga archivos JSON desde la carpeta `/locales`. El usuario puede cambiar el idioma entre **Español** e **Inglés** desde el navbar, sin necesidad de recargar la página.

---

## 🚀 Cómo correr el proyecto localmente

No requiere instalación de dependencias. Solo cloná el repo y abrí el `index.html` en tu navegador, o usá una extensión como **Live Server** en VS Code para evitar problemas con rutas relativas.

```bash
git clone https://github.com/CitosLeonel/GusGreccoChef.git
cd GusGreccoChef
# Abrir index.html con Live Server o similar
```

---

## 📬 Contacto del proyecto

Este sitio fue desarrollado como proyecto freelance para el chef **Gustavo Grecco**.

- 📷 Instagram: [@gusgreccochef](https://instagram.com/gusgreccochef/)
- 📧 gustavogrecco81@gmail.com

---

## 👨‍💻 Desarrollador

**Leonel Citos**
- GitHub: [@CitosLeonel](https://github.com/CitosLeonel)

---

## 📄 Licencia

Este proyecto es de uso privado. Todos los derechos sobre el contenido visual (imágenes, textos) pertenecen a Gustavo Grecco.
