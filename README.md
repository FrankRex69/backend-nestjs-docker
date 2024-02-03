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

# DOCKER DEPLOY(in root)
$ docker network create proxy (docker network ls, docker network prune)
## Docker for developer mode in local
$ IMAGE=backend-local TARGET=local docker compose --env-file ./backend/.env up
## Docker for developer mode in server
$ IMAGE=backend-development TARGET=development docker compose --env-file ./backend/.env up
### DOCKER PUSH IN DOCKER HUB
  ## Docker push app
  $ docker tag backend-development 3481974/backend-development:backend-development
  $ docker login -u "francesco.re69@gmail.com" -p "Lillone19" docker.io
  $ docker push 3481974/backend-development:backend-development
  ## Docker push postgres
  $ docker tag postgis/postgis:13-3.1-alpine 3481974/postgis:postgis
  $ docker login -u "francesco.re69@gmail.com" -p "Lillone19" docker.io
  $ docker push 3481974/postgis:postgis
  ## Docker push pgadmin
  $ docker tag dpage/pgadmin4:latest 3481974/pgadmin4:pgadmin4
  $ docker login -u "francesco.re69@gmail.com" -p "Lillone19" docker.io
  $ docker push 3481974/pgadmin4:pgadmin4
### DOCKER PULL FROM DOCKER HUB
  $ docker login -u "francesco.re69@gmail.com" -p "Lillone19" docker.io
  $ docker pull 3481974/postgis:postgis
  $ docker pull 3481974/pgadmin4:pgadmin4
  $ docker pull 3481974/backend-development:backend-development  

  $ docker network create proxy
  $ docker run --name postgres_base_container --network proxy -v ./docker_volumes/postgresql_data:/var/lib/postgresql/data -p 0.0.0.0:5432:5432 -e 'POSTGRES_HOST=postgresbase' -e 'POSTGRES_DB=postgres' -e 'POSTGRES_USER=postgres' -e 'POSTGRES_PASSWORD=developmentChatOperativa' -d 3481974/postgis:postgis

  $ docker run --name backend-development --network proxy -v ./backend/src:/app/backend/src -p 0.0.0.0:7000:7000 -d 3481974/backend-development:backend-development

  $ docker run --name pgadmin4_base_container --network proxy -p 0.0.0.0:5050:80 -e 'PGADMIN_DEFAULT_EMAIL=admin@admin.com' -e 'PGADMIN_DEFAULT_PASSWORD=root' -d 3481974/pgadmin4:pgadmin4

  $ docker run 3481974/pgadmin4:pgadmin4
  $ docker run 3481974/backend-development:backend-development


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