/**
 * Created by whis on 10/16/16.
 */
const Log = require('node-api-base').Log;
var http = require('http');
var SocketIo = require('socket.io');
var fs = require('fs');
var SocketIoEvent = require('./socket-io/socket.io.server');


var app = http.createServer();

var io = SocketIo(app);

io.on("connection", SocketIoEvent.connectionEvent);

var server  = app.listen(5291, function () {
    var host = server.address().address;
    var port = server.address().port;
    Log.i(`app listening at http://${host}:${port}`);
});

function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end("Error Loading index.html");
        }

        res.writeHead(200);
        res.end(data);
    });
}





