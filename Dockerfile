FROM node:18-alpine

WORKDIR /app/backend

COPY backend /app/backend

RUN npm install

CMD ["npm", "start"]

