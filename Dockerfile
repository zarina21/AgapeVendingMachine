# syntax = docker/dockerfile:1

# Ajustar la versión de Node.js si es necesario
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Next.js"

# Configuración de trabajo
WORKDIR /app

# Establecer entorno de producción
ENV NODE_ENV="production"

# Etapa de construcción
FROM base AS build

# Instalar paquetes necesarios para compilar dependencias de Node
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Copiar los archivos de dependencias
COPY package-lock.json package.json ./
RUN npm ci --include=dev

# Copiar el código de la aplicación
COPY . .

# Construir la aplicación Next.js
RUN npx next build --experimental-build-mode compile

# Eliminar dependencias de desarrollo
RUN npm prune --omit=dev

# Etapa final de la imagen
FROM base

# Copiar la aplicación construida
COPY --from=build /app /app

# El contenedor se ejecutará con este comando por defecto
CMD ["npm", "run", "start"]

# Exponer el puerto 3000
EXPOSE 3000
