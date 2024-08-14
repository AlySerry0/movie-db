FROM node:20

WORKDIR /react-built-app/

COPY public ./ /react-built-app/
COPY src ./ /react-built-app/
COPY package.json ./ /react-built-app/
COPY package-lock.json ./ /react-built-app/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]