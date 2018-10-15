/**
 * @author whis admin@wwhis.com
 * @Created 4/16/17
 */
var net = require('net');

const PORT = 10003;

var server = net.createServer();
server.on('listening', () => console.log('listening in port: ' + PORT));
server.on('connection', (socket) => {
    socket.setEncoding('hex');
    socket.setKeepAlive(true);
    socket.on('data', (data) => {
        console.log('receive data: ', data);
    });
    socket.on('end', data => {
        console.log('end');
    });
    socket.on('error', data => {
        console.log('error')
    });
    socket.on('close', data => {
        console.log('close')
    });
});
server.on('close', () => console.log('close'));
server.on('error', (error) => console.log('error: ' + error));

server.listen(PORT, '0.0.0.0');