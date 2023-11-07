const http = require('http');
const fs = require('fs');

const myserver = http.createServer(function(req, res){
    fs.readFile('lagohina.html', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
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

        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
    });
});
myserver.listen(80);