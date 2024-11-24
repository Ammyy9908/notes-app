# Use Node.js official slim image
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source code
COPY . .

# Expose port
EXPOSE 8000

# Start the application
CMD [ "node", "index.js" ] 