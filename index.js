const tesseract = require('node-tesseract');
const express = require('express');
const fs = require('fs');
const request = require('request');
const imageManager = require('./src/imageManager');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    
    imageManager.download('https://www.google.com/images/srpr/logo3w.png');
    
    tesseract.process(__dirname + '/image.png',function(err, text) {
        if(err) {
            res.send(err);
        } else {
            res.send(text);
        }
    });
});

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//     console.log('done');
// });

// var download = function(uri, filename, callback){
//     request.head(uri, function(err, res, body){
//         console.log('content-type:', res.headers['content-type']);
//         console.log('content-length:', res.headers['content-length']);

//         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//     });
// };

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

