FROM alpine:3.8

RUN apk add --no-cache \
      nodejs \
      yarn \
      curl \
      nodejs-npm \
      tzdata

# Set TimeZone
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

ENV ROOT /myApp/main

WORKDIR $ROOT

COPY ["./package.json", "./yarn.lock", "./.eslintrc.json", "./.prettierrc.json", "./"]
COPY ./src ./src
COPY ./public ./public

RUN yarn install --network-concurrency 1 && \
    yarn cache clean

EXPOSE 3000
ENTRYPOINT ["yarn", "run"]

# two minutes should be enough to initialize the API
# 2min = 120s => 120s/5s = 24 retries...
HEALTHCHECK --interval=5s --timeout=2s --retries=24 \
  CMD ((curl -f http://localhost:3000/) || (exit 1))

CMD ["start"]
