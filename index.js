const express = require('express');
const download = require('./src/donwload');
const ocr = require('./src/ocr');
// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    download('http://s3.amazonaws.com/nimbublips/1359846393.png', (filename) => {
        ocr(filename, (type, text) => {
            type == 'error'? res.send('erro') : res.send(text);
        });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

