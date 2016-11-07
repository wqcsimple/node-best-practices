/**
 * Created by whis on 10/16/16.
 */

var CoreSocket = {
    getSocketId: function(socket)
    {
        return socket.remoteAddress + ':' + socket.remotePort;
    },

};



module.exports.Socket = CoreSocket;
