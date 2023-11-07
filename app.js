const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer(function(req, res){
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './lagohina.html';
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            return res.end("500 Internal Server Error");
        }

        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
    });
});
myserver.listen(80);
