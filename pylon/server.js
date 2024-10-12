const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(55455, () => {
    console.log('Server is listening on port 55455');
}).on('error', (error) => {
    console.error('Server Error: ', error);
});
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('establishing a new connection with client');
    var connection = request.accept(null, request.origin);
    connection.on('error', (error) => {
        console.error('Connection Error: ', error);
    });
    setInterval(() => {
        connection.sendUTF(new Date().getTime());
    }, 100);
});
