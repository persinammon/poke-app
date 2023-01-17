FROM node:18-alpine

WORKDIR /app
COPY . .

# RUN npm install --omit=dev
RUN npm ci --only=production

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

