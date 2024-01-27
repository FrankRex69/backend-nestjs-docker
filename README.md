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

# Docker (in root)
$ docker network create proxy (docker network ls, docker network prune)
$ docker compose --env-file ./backend/.env up (before you rename file backend/.env.example like backend/.env)
```
## Running the app
```bash
# WATCH MODE (in BACKEND directory)
# developer - backend
$ npm run start:dev
```
```bash
# url for use App
http://localhost:8100/test1

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