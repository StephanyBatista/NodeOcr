const tesseract = require('node-tesseract');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  // Recognize text of any language in any format
    tesseract.process(__dirname + '/image.png',function(err, text) {
        if(err) {
            res.send(err);
        } else {
            res.send(text);
        }
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

