FROM node:14-alpine

ENV NODE_ENV production
ENV PORT 3000

EXPOSE $PORT

WORKDIR /usr/src/app

COPY . .

RUN npm ci

CMD ["node", "./server.js"]
