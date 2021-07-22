FROM node:10.0-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY . .
CMD npm run start