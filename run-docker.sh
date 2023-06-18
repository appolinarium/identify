#!/bin/sh
PORT=8080

docker build -t identify -f Containerfile .
docker run -d -p $PORT:$PORT/tcp identify 
echo Listening Identify on http://0.0.0.0/$PORT
