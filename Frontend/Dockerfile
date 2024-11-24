
# Use the official Node.js image
FROM node:22 AS build


# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Set build arguments
ARG VITE_API_URL

# Build the project
RUN VITE_API_URL=$VITE_API_URL npm run build

# Serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

