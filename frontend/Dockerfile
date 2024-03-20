FROM node:20.11-bookworm

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY ./ ./

EXPOSE 3000

ENTRYPOINT ["npm","start"]