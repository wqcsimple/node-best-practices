/**
 * Created by whis on 11/29/16.
 */
var Mysql = require('../lib/mysql');

var mysqlClient = Mysql.client();

function findOne() {
    return mysqlClient.select("*").from("user").where({id: 1}).first().then(
        user => {
            console.log(user);
        }
    )
}

findOne();

