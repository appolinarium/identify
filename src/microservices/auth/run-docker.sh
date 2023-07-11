#!/bin/sh
PORT=8080

docker build -t auth -f Containerfile .
docker run -d -p $PORT:$PORT/tcp auth
echo Listening on http://0.0.0.0/$PORT
