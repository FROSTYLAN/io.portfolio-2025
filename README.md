# 🚀 Portafolio 2025 (React + Vite)

Sitio web personal desarrollado con React y Vite para presentar proyectos, habilidades y experiencia de forma clara, moderna y responsiva. Incluye una arquitectura de componentes (atoms/molecules/organisms) para escalar contenido y estilos mantenibles con Styled Components.

---

## 🧭 Secciones principales

- Inicio — Presentación personal y resumen profesional.
- Proyectos — Portafolio con tarjetas y enlaces a repositorios/demos.
- Sobre mí — Experiencia, formación, intereses y stack tecnológico.
- Contacto — Formas de contacto y redes sociales.

> Nota: La navegación puede ser de una sola página (SPA) o por secciones; la implementación exacta evolucionará junto con el contenido del portafolio.

---

## 🌟 Características

- Diseño moderno y responsivo con componentes reutilizables.
- Arquitectura por niveles: `atoms`, `molecules`, `organisms`, `templates` y `pages`.
- Estilos con `styled-components` y soporte para theming futuro.
- Preparado para despliegue estático.

---

## 🖼️ Vista previa

*(Agrega aquí una imagen o GIF del sitio cuando tengas una build estable)*
```md
![Demo](./src/assets/preview.png)
```

---

## 🚀 Demo en Vivo

💡 Próximamente (Netlify/Vercel en progreso).

---

## 🛠️ Tecnologías utilizadas

* **React 19** — Biblioteca para interfaces de usuario.
* **Vite 7** — Bundler rápido para proyectos modernos.
* **Styled Components 6** — Estilos en CSS-in-JS con soporte de theming.
* **TypeScript 5** — Tipado opcional para mejor DX (migración en curso).
* **ESLint 9** — Reglas y calidad de código.

---

## 📁 Estructura general del proyecto

```bash
io.portfolio-2025/
├── src/
│   ├── assets/               # Imágenes y recursos visuales
│   ├── components/
│   │   ├── atoms/            # Elementos UI básicos
│   │   ├── molecules/        # Composiciones de atoms
│   │   ├── organisms/        # Bloques de UI complejos
│   │   ├── templates/        # Layouts y plantillas
│   │   └── pages/            # Secciones/páginas (en progreso)
│   ├── App.tsx               # Componente raíz
│   ├── main.tsx              # Entry point (TS)
│   ├── App.jsx               # Variante JS (si se requiere)
│   └── main.jsx              # Entry point (JS)
├── public/
├── package.json
├── vite.config.js
└── index.html
```

---

## ⚙️ Instalación y uso

**Requisitos:** `Node.js >= 18` y `npm`.

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre `http://localhost:5173` en tu navegador.
3. Construir para producción:
   ```bash
   npm run build
   ```
4. Previsualizar build local:
   ```bash
   npm run preview
   ```
5. Linter (opcional):
   ```bash
   npm run lint
   ```

---

## 🎯 Funcionalidades clave

* Presentación personal y perfil profesional.
* Listado de proyectos con enlaces y descripciones.
* Sección de habilidades y tecnologías.
* Información de contacto y redes.
* Diseño modular y escalable con componentes reutilizables.

---

## ⚠️ Consideraciones y límites actuales

* El contenido puede ser **estático** inicialmente; no hay backend.
* La navegación y secciones están **en evolución** conforme se integra contenido.
* La migración a TypeScript está en progreso; conviven archivos `.jsx` y `.tsx`.

---

## 🔧 Posibles mejoras

* [ ] Modo oscuro con theming de `styled-components`.
* [ ] SEO (metadatos, sitemap, Open Graph).
* [ ] Sección de blog/Notas técnicas.
* [ ] Internacionalización (ES/EN).
* [ ] Tests unitarios y de componentes.
* [ ] Optimización de rendimiento y accesibilidad (Lighthouse).
* [ ] Animaciones sutiles (Framer Motion, opcional).
* [ ] Integración de analítica (Plausible/GA).

---

## 💡 Aprendizajes

* Arquitectura de componentes desacoplada (atoms → organisms → templates).
* Estilos con `styled-components` y preparación para theming.
* Uso de Vite para DX rápida y bundling eficiente.
* Configuración de ESLint y tipado opcional con TypeScript.

---

## 📄 Licencia

Actualmente sin licencia.
Si deseas reutilizar, puedes aplicar la licencia **MIT** y añadir el archivo `LICENSE`.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas:

1. Fork del repositorio.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Commit: `git commit -m "feat: añade mejora X"`.
4. Push: `git push origin feature/mi-mejora`.
5. Abre un Pull Request.

---

## 👨‍💻 Autor

**Charles Castillo (FROSTYLAN)**

* 🌐 `https://github.com/FROSTYLAN`
* 💼 `https://linkedin.com/in/charles-castillo-772968234`

---

⭐ Si te resultó útil, considera dar una estrella al repositorio.
🚀 Portafolio 2025: presenta tu trabajo con claridad y estilo.
