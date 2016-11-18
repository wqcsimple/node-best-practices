/**
 * Created by whis on 11/17/16.
 * https://github.com/chyingp/nodejs-learning-guide
 */

var dns = require('dns');
var Log = require('node-api-base').Log;

var url = "whis.wang";

 // 域名解析：dns.lookup()
dns.lookup(url, function(err, address, family){
    if (err) throw err;

    Log.i("例子A: " + address);
})


// 通过同一个域名获取不同的ip
var options = {all: true};
dns.lookup(url, options, function(err, address, family){
    if(err) throw err;
    Log.d(address);
});

// 域名解析：dns.resolve4()
dns.resolve4(url, function(err, address){
    if(err) throw err;
    Log.i( JSON.stringify(address) );
});


