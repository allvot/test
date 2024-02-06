FROM node:21-slim

RUN apt-get update

RUN apt-get update -qq \
    && apt-get install -y build-essential libsqlite3-dev git \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g npm

WORKDIR /app

# Copy the entrypoint script into the container
COPY docker/front/entrypoint.sh /app/docker/front/entrypoint.sh
