# Use the official Ruby 3.0 Alpine image as the base image
FROM ruby:3.0-slim

# Install dependencies
RUN apt-get update

RUN apt-get update -qq \
    && apt-get install -y build-essential libsqlite3-dev git \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

COPY backend/Gemfile backend/Gemfile.lock /app/

# Copy the entrypoint script into the container
COPY docker/back/entrypoint.sh /app/docker/back/entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /app/docker/back/entrypoint.sh

# Specify the entrypoint to start a bash console
ENTRYPOINT ["/app/docker/back/entrypoint.sh"]