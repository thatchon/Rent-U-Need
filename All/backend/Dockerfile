
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g json-server

COPY . .

EXPOSE 3005

CMD [ "npm", "start"]