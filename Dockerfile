# Dev image pro Vite/React
FROM node:20-alpine

WORKDIR /app
SHELL ["/bin/sh", "-lc"]

# (volitelně) nativní nástroje pro balíčky, které se kompilují
RUN apk add --no-cache python3 make g++ git

# Stabilní file-watching na Windows/WSL a rychlejší npm
ENV CHOKIDAR_USEPOLLING=true \
    WATCHPACK_POLLING=true \
    CI=true \
    NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false
