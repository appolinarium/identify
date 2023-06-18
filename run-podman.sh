#!/bin/sh
PORT=8080

podman build -t identify -f Containerfile
podman run -d -p $PORT:$PORT/tcp identify 
echo Listening Identify on http://0.0.0.0/$PORT
