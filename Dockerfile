FROM node:alpine as build

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY . /app/

RUN npm run build