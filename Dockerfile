# Use the official Node.js runtime as the base image
FROM node:20-alpine3.20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn --silent

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN yarn build

# Use Nginx as the production server
FROM nginx:1.27.4-alpine

RUN apk add --no-cache jq

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]