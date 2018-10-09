
docker rm -f server || true
docker rm -f client || true
docker network rm prodNet || true

export ADDR=:8080
docker network create prodNet

docker run -d \
-e ADDR=$ADDR \
--network prodNet \
-p 8080:8080 \
--name server \
server

docker run -d \
--network prodNet \
-p 80:80 \
--name client \
client
