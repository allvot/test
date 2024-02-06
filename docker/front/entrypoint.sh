#!/bin/bash
# entrypoint.sh

echo "Switching directory..."
cd frontend

# Install node modules
echo "Installing node modules..."
npm install

# Start a bash console
/bin/bash
