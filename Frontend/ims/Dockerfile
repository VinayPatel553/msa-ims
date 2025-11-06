# ===============================
# React Frontend Dockerfile
# ===============================

# 1. Use Node image to build React app
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build
COPY . .
RUN npm run build

# 2. Use Nginx to serve frontend
FROM nginx:stable-alpine

# Copy build files to Nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy default nginx config (optional if you want SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
