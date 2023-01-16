FROM node:16

WORKDIR /src/client/app
COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .
EXPOSE 8000

ENTRYPOINT [ "node", "server.js" ]

