#!/usr/bin/env bash
docker rm -f server || true

export ADDR=:8080

docker run -d \
-e ADDR=$ADDR \
-p 8080:8080 \
--name server \
server