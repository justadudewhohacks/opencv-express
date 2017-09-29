FROM justadudewhohacks/opencv-nodejs

WORKDIR /app

COPY ./package.json /app/package.json
RUN npm install

COPY ./src /app/src

CMD ["nodemon", "-L", "./src/server.js"]