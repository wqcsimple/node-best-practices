/**
 * Created by whis on 10/16/16.
 */
const Log = require('node-api-base').Log;

var SocketIoEvent = {
    connectionEvent: function (socket) {

        socket.emit('news', { hello: 'world' });
        socket.on('whis', function (data) {
            console.log(data);
        });

        socket.on('event', SocketIoEvent.socketDataEvent);
        socket.on('disconnect', SocketIoEvent.socketDisconnectEvent);
    },

    socketDataEvent: function (data) {
        Log.i("socket data event");
    },

    socketDisconnectEvent: function (data) {
        Log.i("disconnect event");
    }
};

module.exports = SocketIoEvent;