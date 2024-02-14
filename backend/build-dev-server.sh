npm run build
IMAGE=backend-development TARGET=development docker compose -f ../docker-compose-dev-server.yml --env-file .env up