From node:14-slim

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

WORKDIR /usr/src/app

COPY . .
EXPOSE 3000

CMD [ "yarn", "start"]  