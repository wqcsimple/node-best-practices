/**
 * Created by whis on 11/17/16.
 */
const Config = require("./config");

let mysqlClient = null;

function client() {
    if (mysqlClient == null)
    {
        mysqlClient = require("knex")({
            client: 'mysql',
            connection: {
                host : Config.MYSQL_HOST,
                user : Config.MYSQL_USER,
                password : Config.MYSQL_PASS,
                database : Config.MYSQL_DB
            },
            pool: { min: 0, max: 100 }
        });
    }

    return mysqlClient;
}


var mysql = {
    client: client
};

module.exports = mysql;
