# Schedule Test
This is a short test for Homebase.

## Installation (Docker)

You can either run the app locally by installing all dependencies or you can use Docker to run the entire application with a single command. Just follow the instructions below.

### Prerequisites

- Docker
- Docker Compose

### Instructions

Start Docker environment

```bash
# Start up the servers:
docker-compose up -d

# View the app's logs
docker-compose logs -f

# Stop the services
docker-compose down -v
```

## Installation (Local)

Alternatively, if Docker is not your thing, you can run the application locally by following these instructions:

### Prerequisites

- Ruby 3.0.6p216
- npm 10.4.0
- Instructions

### Run Ruby app

```bash
# Install rbenv
brew install rbenv

# Install Ruby 3.0.6
rbenv install 3.0.6

# Change directory
cd backend/

# Install Ruby gems
bundle install

# Run server
ruby server.rb -o 0.0.0.0 -p 3000
```

### Run React App

```bash
# Install Node
brew install node

# Change directory
cd frontend

# Install Node modules
npm install

# Start server
npm run start
```

## Usage
- Run Docker environment (or run locally)
- Open your browser
- Visit http://localhost:3001
- Use the app