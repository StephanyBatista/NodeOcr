FROM ubuntu:latest

RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt-get install -y tesseract-ocr
RUN apt-get install -y tesseract-ocr-eng

WORKDIR /app

COPY image.png index.js package.json

RUN npm install

EXPOSE 8080
CMD [ "node", "index" ]
