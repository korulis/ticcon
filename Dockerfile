FROM node:16-alpine3.11 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm i

FROM node:16-alpine3.11
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/node_modules /usr/src/app/node_modules
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "start"]
