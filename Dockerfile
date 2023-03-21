# stage 1
FROM node:19.8.1-alpine3.16 AS builder
WORKDIR /DockerDemo
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:1.23.3-alpine
COPY --from=builder /DockerDemo/dist/angular-app /usr/share/nginx/html