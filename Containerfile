# syntax=docker/dockerfile:1

FROM alpine:latest

RUN apk update && apk upgrade
RUN apk add nodejs && apk add yarn

COPY ./src /identify

WORKDIR /identify

RUN yarn

EXPOSE 8080

CMD yarn dev
