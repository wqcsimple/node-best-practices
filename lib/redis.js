/**
 * Created by whis on 11/17/16.
 */
var Config = require('../config');
var Redis = require('ioredis');

var redisClient = null;

function client() {
    if (redisClient == null) {
        redisClient = new Redis(Config.REDIS_PORT, Config.REDIS_HOST, {password: Config.REDIS_PASS});
    }

    return redisClient;
}

function createClient() {
    return new Redis(Config.REDIS_PORT, Config.REDIS_HOST, {password: Config.REDIS_PASS});
}

function get(key, func, expireSeconds) {
    redisClient = client();
    return redisClient.get(key).then(data => {
        if (data) {
            return JSON.parse(data);
        }
        else {
            return Promise.resolve(func()).then(funcData => {
                redisClient.setex(key, expireSeconds, JSON.stringify(funcData));
                return funcData;
            })
        }
    })
}

var redis = {
    client: client,
    createClient: createClient,
    get: get,
};

module.exports = redis;