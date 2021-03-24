FROM node:alpine

# RUN apk update && apk add ca-certificates && update-ca-certificates

# RUN mkdir /app
# ADD . /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8080
CMD ["npm", "start"]
