# Dev image pro Vite/React
FROM node:20-alpine

WORKDIR /app
SHELL ["/bin/sh", "-lc"]

RUN apk add --no-cache python3 make g++ git

ENV CHOKIDAR_USEPOLLING=true \
    WATCHPACK_POLLING=true \
    CI=true \
    NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false

COPY package*.json ./
RUN npm install
COPY . .
