import fs from 'fs';
import request from 'request';

export default class ImageManager{

    download(uri){
        
        const filename = uri.split('/')[uri.split('/').lenth - 1];
        console.log(filename);
        
        request.head(uri, function(err, res, body){
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    }

    delete(filename){
        fs.unlinkSync(filename);
    }
}