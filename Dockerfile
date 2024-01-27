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
ENTRYPOINT npm run start:dev


# ------------------------------------------------------------------
# ------------------------------------------------------------------
# ------------------------------------------------------------------

# Use the Node.js image for the local
FROM node:18.19 AS development

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
ENTRYPOINT npm run build && npm run start