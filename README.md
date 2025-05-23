# Zenith Jobs - Portal de Ofertas Laborales
## 📋 Descripción del Proyecto
Zenith Jobs es una plataforma moderna para la publicación y gestión de ofertas laborales, diseñada para conectar a candidatos con oportunidades profesionales de manera eficiente. Construida con Astro y TailwindCSS, ofrece una experiencia de usuario fluida y atractiva tanto para reclutadores como para candidatos.

## ✨ Características Principales
- Listado de Ofertas : Visualización clara y atractiva de todas las ofertas disponibles
- Detalles de Ofertas : Página detallada para cada posición con información completa
- Formulario de Postulación : Sistema integrado para que los candidatos apliquen directamente
- Diseño Responsivo : Experiencia óptima en dispositivos móviles y de escritorio
- Interfaz Intuitiva : Navegación sencilla y amigable para todos los usuarios
## 🚀 Estructura del Proyecto
```
zenith-jobs/
├── public/                      # Archivos 
estáticos (favicon, robots.txt…)
│   └── favicon.svg
├── src/
│   ├── assets/                  # 
Imágenes, íconos, fuentes…
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/              # 
Componentes reutilizables
│   │   ├── JobCard.astro        # Tarjeta 
de cada oferta
│   │   ├── Header.astro         # 
Encabezado del sitio
│   │   └── FormField.astro      # Campo de 
formulario
│   ├── layouts/                 # Layouts 
de página
│   │   └── Layout.astro
│   ├── pages/                   # Rutas 
públicas
│   │   ├── index.astro          # Home / 
listado de ofertas
│   │   ├── jobs/                # Rutas 
anidadas para ofertas
│   │   │   ├── [id].astro       # Detalle 
de oferta + formulario
│   │   │   └── [id]/success.astro # 
Confirmación de postulación
│   │   └── 404.astro            # Página 
no encontrada
│   ├── services/                # Lógica 
de negocio
│   │   └── jobService.ts        # Gestión 
de ofertas laborales
│   ├── types/                   # 
Definiciones de TypeScript
│   │   └── job.ts               # 
Interface Job, ApplicationPayload…
│   └── styles/                  # CSS 
global o variables
│       └── global.css
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
## 🛠️ Tecnologías Utilizadas
- Astro : Framework web para sitios orientados a contenido
- TailwindCSS : Framework CSS para diseño rápido y responsivo
- TypeScript : Tipado estático para desarrollo más seguro
- Componentes Astro : Arquitectura basada en componentes para mejor mantenibilidad
## 🧞 Comandos Disponibles
Comando Acción npm install Instala dependencias npm run dev Inicia servidor de desarrollo en localhost:4321 npm run build Construye el sitio para producción en ./dist/ npm run preview Vista previa local de la versión de producción npm run astro ... Ejecuta comandos CLI como astro add , astro check

## 🔍 Funcionalidades Principales
### Listado de Ofertas
La página principal muestra todas las ofertas laborales disponibles en un formato de tarjetas, mostrando información clave como:

- Título del puesto
- Ubicación
- Modalidad de trabajo (remoto, presencial, híbrido)
- Salario
- Número de postulaciones
### Detalle de Oferta
Al hacer clic en una oferta, se accede a una página detallada que incluye:

- Descripción completa del perfil requerido
- Cualidades valoradas en los candidatos
- Detalles específicos (modalidad, ubicación, salario)
- Formulario de postulación integrado
### Proceso de Postulación
Los candidatos pueden postularse directamente desde la página de detalle de la oferta:

1. Completar formulario con datos personales
2. Adjuntar CV en formato PDF
3. Enviar solicitud
4. Recibir confirmación de postulación exitosa
## 🚀 Cómo Empezar
1. Clona este repositorio
   
   ```
   git clone https://github.com/tu-usuario/
   zenith-jobs.git
   cd zenith-jobs
   ```
2. Instala las dependencias
   
   ```
   npm install
   ```
3. Inicia el servidor de desarrollo
   
   ```
   npm run dev
   ```
4. Abre tu navegador en http://localhost:4321
## 🤝 Contribuciones
Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu feature ( git checkout -b feature/amazing-feature )
3. Haz commit de tus cambios ( git commit -m 'Add some amazing feature' )
4. Push a la rama ( git push origin feature/amazing-feature )
5. Abre un Pull Request
## 📝 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 📞 Contacto
Para preguntas o sugerencias, por favor contacta a través de correo electrónico o abre un issue en este repositorio.

Desarrollado con ❤️ usando Astro