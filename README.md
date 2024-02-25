## Basic project with
  ```bash
  - Backend with Nodejs and Nestjs framework;
```

## Installation backend/frontend

```bash
# Install package's backend (in backend directory)
$ npm install
```

## Docker section
```bash
# Docker stop e remove (in root)
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)

# DOCKER DEPLOY (in root)
$ docker network create proxy (docker network ls, docker network prune)
## Docker for developer mode in local
$ IMAGE=backend-development-local:backend-development-local TARGET=local docker compose -f docker-compose-dev-local.yml --env-file ./backend/.env up


```
## Running the app
```bash
# WATCH MODE (in BACKEND directory)
# developer - backend
$ npm run start:dev
```
```bash
# SWAGGER
http://localhost:7000/api/swagger/

# PGADMIN
http://localhost:5050/
user: admin@admin.com
pass: root
for connection in pgadmin
- create a new server
- "hostname": "postgresbase"
- "port": 5432
- "Maintenance": "postgres"
- "username": "postgres"
- "Password": "developmentChatOperativa"
for view data in pgadmin
- Databases --> Schemas --> base --> Tables
```