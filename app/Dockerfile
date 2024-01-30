FROM node:21

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]