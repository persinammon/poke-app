FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm ci --only=production

EXPOSE 8000

ENTRYPOINT [ "node", "server.js" ]
