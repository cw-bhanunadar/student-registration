From node:14-slim

COPY package*.json ./
RUN npm i

WORKDIR /usr/src/app

COPY . .
EXPOSE 5000

CMD [ "npm", "start"]