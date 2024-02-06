#!/bin/bash
# entrypoint.sh

cd backend/
bundle install

ruby server.rb -o 0.0.0.0 -p 3000

# Start a bash console
/bin/bash
