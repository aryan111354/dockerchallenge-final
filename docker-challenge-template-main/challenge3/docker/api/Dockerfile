# Use the official Node.js image as base
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# # Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
# CMD ["sleep", "infinity"]
