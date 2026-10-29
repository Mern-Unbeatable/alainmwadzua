# Coolify: Build Pack = Dockerfile, Ports Exposes = 80
# API_BASE_URL is baked into the bundle at build time; override it in Coolify
# as an environment variable with "Build Variable" checked.

FROM node:22-alpine AS build
WORKDIR /app

ARG API_BASE_URL="https://api.onlineclasswriters.com"
ENV API_BASE_URL=$API_BASE_URL

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx astro build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
