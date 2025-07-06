#!/bin/bash

docker compose up --build -d

if [ $? -eq 0 ]; then
  echo "Build and deploy successful. Cleaning up old images..."
  docker image prune -f
else
  echo "Build or deploy failed. No cleanup performed."
fi