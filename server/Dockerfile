# Use an official Node.js runtime as a base image
FROM node:18-alpine  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./  

# Install dependencies
RUN npm install  

# Copy the rest of the application files
COPY . .  

# Expose the port that the application runs on
EXPOSE 5000  

# Start the server
CMD ["npm", "run", "dev"] 