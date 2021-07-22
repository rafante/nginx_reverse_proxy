FROM node:10.0-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY . .
EXPOSE 3000
CMD npm run start