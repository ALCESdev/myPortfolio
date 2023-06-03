# ALCESdev Portfolio

Este proyecto es mi portafolio personal, en el cual muestro mis habilidades y proyectos realizados.
Está desarrollado con JavaScript, HTML y CSS (con preprocesado Sass), y utiliza [Vite](https://vitejs.dev) como herramienta de construcción.

## Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org) en tu sistema.

## Configuración inicial

1. Clona o descarga este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.

## Instalación

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución en entorno de desarrollo

Para iniciar el servidor de desarrollo y ver los cambios en tiempo real, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor local y te proporcionará una URL para acceder a la aplicación en tu navegador.

## Generación de la versión de producción

Si deseas generar una versión optimizada y lista para producción, ejecuta el siguiente comando:

```bash
npm run build
```

Este comando generará los archivos optimizados en la carpeta dist, los cuales puedes desplegar en tu servidor web.

## Estructura del proyecto

El proyecto sigue la siguiente estructura de carpetas:

```
├── dist/             # Carpeta de salida para los archivos generados en la compilación
├── public/           # Archivos públicos y otros recursos estáticos
├── src/              # Código fuente del proyecto
│   ├── index.js      # Fichero principal de JavaScript
│   └── main.scss     # Fichero principal de estilos
├── .gitignore        # Archivo para ignorar los archivos y carpetas que no deben incluirse en el repositorio Git
├── index.html        # Página principal del proyecto
├── package.json      # Archivo de configuración del proyecto y lista de dependencias
├── README.md         # Documentación del proyecto (este archivo)
└── vite.config.js    # Archivo de configuración de Vite
```

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT). Puedes consultar el archivo LICENSE para más detalles.
