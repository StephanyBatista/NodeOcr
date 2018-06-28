const fs = require('fs');
const request = require('request');

const download = function(uri, callback){
        
    const filename = uri.split('/')[uri.split('/').length - 1];
    
    request.head(uri, (err, res, body) => {
        request(uri)
            .pipe(fs.createWriteStream(filename))
            .on('close', () => { callback(__dirname + '/' + filename); });
    });
}

module.exports = download;