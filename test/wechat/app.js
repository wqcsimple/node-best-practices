/**
 * @author whis admin@wwhis.com
 * @Created 5/4/17
 */

const Util = require('../../lib/util');
const Log = require("node-api-base").Log;
const {Wechaty} = require('wechaty');

const wechat = Wechaty.instance();
wechat
    .on('scan', onScan)
    .on('login', login)
    .on('message', message)
    .on('error', error)
    .on('logout', logout)
    .init()
    .catch(err => {
        Log.e('Bot', 'init() fail: %s', err);
        wechat.quit();
        process.exit(-1)
    });


function onScan(url, code) {
    Lod.i(`Scan QR Code to login: ${code}\n${url}`);
}

function login(user) {
    Log.i(`User ${user} logined`);
}

function logout(user) {
    Log.i('Bot', `${user.name()} logouted`)
}

function message(message) {
    Log.i(`Receive Or Deliver Message: ${message}`)
    const room = message.room();
    Log.i((room ? '[' + room.topic() + ']' : '')
        + '<' + message.from().name() + '>'
        + ':' + message.toStringDigest()
    );

    if (message.self()) {
        Log.i('this message is sent by myself!')
        return false;
    }

    message.say('这是我的自动回复！---- ' + Util.date('Y-m-d H:i:s'))

}

function error(error) {
    Log.i(`Error: ${error}`)
}