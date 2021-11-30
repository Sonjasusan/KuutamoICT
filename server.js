var fs = require('fs');
const http = require('http');

var server = http.createServer(function (req, res) {

    console.log('pyyntö koski tätä: ' + req.url);

    switch (req.url) {
        case "/tyyli.css":
            res.writeHead(200, { 'Content-Type': 'text/css' });
            var myReadStream1 = fs.createReadStream(__dirname + '/webdir/tyyli.css', 'utf8');
            myReadStream1.pipe(res);
            break;
            case "/favicon.ico":
                var img = fs.readFileSync('favicon.ico');
                res.writeHead(200, {'Content-Type': 'image/x-icon' });
                res.end(img, 'binary');
                break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var myReadStream2 = fs.createReadStream(__dirname + '/webdir/index.html', 'utf8');
            myReadStream2.pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');