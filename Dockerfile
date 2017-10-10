FROM node:6.11.2-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 8626
cmd ["node", "index.js"]