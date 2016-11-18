/**
 * Created by whis on 11/17/16.
 */
var net = require('net');
var Log = require('node-api-base').Log;

var PORT = 3000;
var HOST = '127.0.0.1';

// tcp客户端
var client = net.createConnection(PORT, HOST);
client.on('connect', function(){
    Log.i('客户端：已经与服务端建立连接');
});

client.on('data', function(data){
    Log.i('客户端：收到服务端数据，内容为{'+ data +'}');
});

client.on('close', function(data){
    Log.i('客户端：连接断开');
});

client.end('你好，我是客户端');