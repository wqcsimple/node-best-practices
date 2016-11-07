/**
 * Created by whis on 10/16/16.
 */
var net = require('net');
var Config = require('./lib/config.js');
var Log = require('node-api-base').Log;

var client = new net.Socket();

client.connect(Config.PORT, '127.0.0.1', function () {
    client.setEncoding('hex');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});

var sys = require("sys");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var s = d.toString().trim();

    switch (s) {
        case "1": {
            client.write('ff130600010203040506010203040506070801020345', 'hex');

        } break;

        default: {
            Log.i("default");
        } break;

    }
});