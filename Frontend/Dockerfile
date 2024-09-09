# # Use the official Node.js image
# FROM node:22 AS build

# # Set working directory
# WORKDIR /app

# # Install dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy project files
# COPY . .

# # Build the project
# RUN npm run build

# # Serve the app
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the frontend
FROM node:22 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files and build
COPY . .
RUN npm run build

# Stage 2: Test the frontend
FROM node:22 AS test

# Set working directory
WORKDIR /app

# Install dependencies and copy project files
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Stage 3: Serve the app
FROM nginx:alpine

# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port and run nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
