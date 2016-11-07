/**
 * Created by dd on 8/28/16.
 */

const Log               = require('node-api-base').Log;
const Util              = require('node-api-base').Util;
const Core              = require('../lib/core');


var CoreSocket = {
    socketList: {},

    setupSocket: function(socket){
        var now = Util.time();
        var socketId = Core.Socket.getSocketId(socket);

        Log.i(`now: ${now}`);
        Log.i(`sockerId: ${socketId}`);

        socket.setEncoding('hex');
        socket.setKeepAlive(true);
        socket.on('data', CoreSocket.onEventData);
        socket.on('end', CoreSocket.onEventEnd);
        socket.on('error', CoreSocket.onEventError);
        socket.on('close', CoreSocket.onEventClose);
    },

    onEventData: function (data) {
        Log.i(`receive data: ${data}`);
    },

    onEventEnd: function(){
        var socket = this;

        Log.e('socket end');
    },

    onEventError: function(error){
        var socket = this;

        Log.e("socket error");
    },

    onEventClose: function(hasError){
        var socket = this;
        Log.e("socket close");
    },
};

module.exports = CoreSocket;