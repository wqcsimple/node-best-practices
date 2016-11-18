/**
 * Created by whis on 11/17/16.
 */
var net = require('net');
var Log = require('node-api-base').Log;

var PORT = 3000;
var HOST = "127.0.0.1";

var server = net.createServer(function(socket){
    Log.i("服务端: 收到来自客户端的请求");

    socket.on('data', function(data){
        Log.i('服务端：收到客户端数据，内容为{'+ data +'}');

        // 给客户端返回数据
        socket.write('你好，我是服务端');
    });

    socket.on('close', function(){
        Log.i('服务端：客户端连接断开');
    });
});

server.listen(PORT, HOST, function(){
    Log.i('服务端：开始监听来自客户端的请求');

    // server.close(function(error){
    //     if(error){
    //         Log.i( 'close回调：服务端异常：' + error.message );
    //     }else{
    //         Log.i( 'close回调：服务端正常关闭' );
    //     }
    // });
});

server.on('close', function(){
    console.log( 'close事件：服务端关闭' );
});

server.on('error', function(error){
    console.log( 'error事件：服务端异常：' + error.message );
});