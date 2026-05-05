# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY app/ .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 4000

# Start app
CMD ["npm", "start"]
