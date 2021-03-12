const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    // console.log(url,url.parse(`${req.url}?nombre=gustavo`));
    const myURL = new URL(req.url,'http://localhost:8000');
    res.end(myURL.pathname==='/ruta' ? `esta es mi ${myURL.pathname}` : 'Hola mundo');
    console.log(myURL);
    console.log(req.headers);
    res.end();
});

server.on('clientError', (err, socket) => socket.end('HTTP/1.1 400 Bad Request\r\n\r\n'));
server.listen(8000);