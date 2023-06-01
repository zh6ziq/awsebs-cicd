# Use an official Node runtime as a parent image
FROM node:16

WORKDIR /var/www/html
COPY ./package.json /var/www/html

RUN npm install
COPY . /var/www/html

EXPOSE 3000
CMD ["npm", "start"]