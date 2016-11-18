module.exports.LOG_LEVEL = 'debug';

module.exports.PORT = PORT = 33168;
module.exports.AUTH = AUTH = 'AUTH';

module.exports.REDIS_HOST = REDIS_SERVER = 'redis';
module.exports.REDIS_PORT = REDIS_PORT = 6379;
module.exports.REDIS_PASS = REDIS_PASS = null;

module.exports.MYSQL_HOST = MYSQL_HOST = 'db';
module.exports.MYSQL_DB = MYSQL_DB = 'test';
module.exports.MYSQL_USER = MYSQL_USER = 'root';
module.exports.MYSQL_PASS = MYSQL_PASS = '7';

module.exports.MONGO_CONNECT_URI = "mongodb://mongo:27017/test";
module.exports.MONGO_CONNECT_OPTION = {};

if (process.env.test)
{
    module.exports.PARENT_REPO_OWNER = 'dd:staff';
}