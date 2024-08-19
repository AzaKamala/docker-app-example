# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# For some reason knex commands are not working inside docker containers unless installed globally
RUN npm install -g knex

# Copy the rest of the app source code to the working directory
COPY . .

# Expose the port that the app will listen on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]