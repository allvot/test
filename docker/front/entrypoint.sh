#!/bin/bash
# entrypoint.sh

echo "Switching directory..."
cd frontend

echo "Installing node modules..."
npm install

echo "Starting server..."
npm run start

# Start a bash console
/bin/bash
