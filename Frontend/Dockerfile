# Use the official Node.js image
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


##ANOTHER VERSION
# # Use the official Node.js image to build the frontend
# FROM node:18 AS build
# WORKDIR /app

# # Copy the package files and install dependencies
# COPY frontend/package*.json ./
# RUN npm install

# # Copy the rest of the frontend code and build the application
# COPY frontend/ ./
# RUN npm run build

# # Serve the frontend application using a static file server
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

