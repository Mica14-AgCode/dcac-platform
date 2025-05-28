# DeCampoaCampo Platform

Plataforma de análisis crediticio para el sector agrícola.

## Características

- Búsqueda por CUIT o Razón Social
- Análisis detallado de productores agrícolas
- Información sobre agricultura y ganadería
- Análisis de flujo de caja
- Simulador de créditos
- Integración con Google Drive para datos

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Drive API

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/dcac-platform.git

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## Estructura del Proyecto

```
dcac-platform/
├── src/
│   ├── app/           # Rutas y páginas
│   ├── components/    # Componentes reutilizables
│   ├── lib/          # Utilidades y configuraciones
│   └── types/        # Definiciones de tipos
├── public/           # Archivos estáticos
└── ...
```

## Configuración

1. Crear archivo `.env.local` con las credenciales necesarias
2. Configurar acceso a Google Drive API
3. Ajustar variables de entorno según sea necesario

## Desarrollo

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar pruebas
npm run test
```

## Despliegue

La aplicación está configurada para desplegarse en Vercel.

## Licencia

Todos los derechos reservados - deCampoaCampo
