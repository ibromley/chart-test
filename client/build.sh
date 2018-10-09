set -e
npm run-script build
docker build -t client .