# Schedule Test

This is a short test for Homebase.

## Installation (Docker)

You can either run the app locally by installing all dependencies or you can use docker to run the entire application sith a single command.

Docker allows you to run the application with a single command just follow the instructions.

### Prerequisites

- Docker
- Docker Compose

### Instructions

Startup docker environment

```bash
# startup the servers:
docker-compose up -d

# spy the app's logs
docker-compose logs -f

# stop the services
docker-compose down -v
```

## Installation (Local)

Alternatively if docker is not your thing you can run the application locally by following these instructions:

### Prerequisites

- ruby 3.0.6p216
- npm 10.4.0

### Instructions 

Run ruby app

```bash
# Install rbenv
brew install rbenv

# Install ruby 3.0.6
rbenv install 3.0.6

# Change directory
cd backend/

# Install ruby gems
bundle install

# Run server
ruby server.rb -o 0.0.0.0 -p 3000
```

Run React app

```bash
# Install node
brew install node

# Change directory
cd frontend

# Install node modules
npm install

# Starting server
npm run start
```

## Usage

- Run docker environment (or run locally)
- Open your browser
- Visit http://localhost:3001
- Use the app
