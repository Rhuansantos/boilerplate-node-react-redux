FROM node:carbon

WORKDIR /app

COPY package.json /app
RUN npm install

# Global Installs
RUN npm install -g pm2 sequelize-cli

COPY . /app

ENV NODE_ENV test
ENV PORT 8080

EXPOSE 8081

CMD ["npm", "run", "start"]