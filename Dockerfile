# Use the Node.js image for the local
FROM node:20 AS local

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app/backend

# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
COPY ./backend/package.json /app/backend/package.json

# Install the dependencies
RUN npm install

# Copy all files from current folder
# inside our image in the folder `/app`
COPY . /app

# Command
ENTRYPOINT npm run start:dev-local

# ------------------------------------------------------------------
# ------------------------------------------------------------------
# ------------------------------------------------------------------

# Use the Node.js image for the local
FROM node:20 AS development

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app/backend

# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
COPY ./backend/package.json /app/backend/package.json

# Copy the file `.env` from current folder
# inside our image in the folder `/app`
COPY ./backend/.env /app/backend/.env

# Install the dependencies
RUN npm install --omit=dev

# Copy all files from current folder
# inside our image in the folder `/app`
# COPY . /app
COPY ./backend/dist /app/backend/dist

# Command
ENTRYPOINT npm run start:prod