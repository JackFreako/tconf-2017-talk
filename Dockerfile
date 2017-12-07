
FROM node:9.2.0-slim as code
COPY . /code/
WORKDIR /code/
RUN npm install