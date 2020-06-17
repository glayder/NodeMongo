FROM alpine:3.8

LABEL maintainer="myApp.com.br"

RUN apk add --no-cache \
      nodejs \
      yarn \
      curl \
      nodejs-npm \
      tzdata

# Set TimeZone
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

ENV ROOT /node/api

WORKDIR $ROOT
COPY ["./package.json", "./yarn.lock", "./"]
COPY ./src ./src

RUN yarn install 

EXPOSE 3100

## Launch the wait tool and then your application
CMD yarn start