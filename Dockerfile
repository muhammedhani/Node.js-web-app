FROM node:alpine

# app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]