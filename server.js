/**
 * Created by whis on 10/16/16.
 */
var Log = require('node-api-base').Log;
var net = require('net');
var Config = require('./lib/config.js');
var CoreSocket = require('./server/socket');

var server = net.createServer();
server.on('listening', () => Log.i('listening in port: ' + Config.PORT));
server.on('connection', (socket) => CoreSocket.setupSocket(socket));
server.on('close', () => Log.i('close'));
server.on('error', (error) => Log.e('error: ' + error));

server.listen(Config.PORT, '0.0.0.0');
