FROM node:18.9.1

WORKDIR /app

Copy package.json  .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev", "--", "--host"]