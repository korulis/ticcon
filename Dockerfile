FROM node:16-alpine3.11 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80 3000
# CMD ["nginx", "-g", "daemon off;"]