const tesseract = require('node-tesseract');

var ocr = (filename, callback) => {
    tesseract.process(filename, (err, text) => {
        err ? callback('error') : callback('success', text);
    });
}

module.exports = ocr;