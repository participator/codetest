FROM node:21-bullseye

WORKDIR /usr/src/todos

COPY app/package* .

RUN npm install -g npm@latest
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]