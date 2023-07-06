# syntax=docker/dockerfile:1

# docker & podman supported

FROM alpine:latest

RUN apk update && apk upgrade
RUN apk add nodejs && apk add yarn

ENV NITRO_PORT=8080

COPY ./src/front /identify

WORKDIR /identify

RUN yarn && yarn build:ssr

EXPOSE 8080

CMD node .output/server/index.mjs
