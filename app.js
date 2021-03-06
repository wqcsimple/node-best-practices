const Core = require("node-api-base");
const Util = require('node-api-base').Util;
const Log = require("node-api-base").Log;
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(Core.errorHandler);
app.use(Core.notFoundHandler);

function execute(context, command) {
    Util.execute(command)
        .then(() => { context.finish("done") })
        .catch(e => { context.finish({ error: Util.getFormattedJson(e) }) })
    ;
}

var api = {
    '~/test':                                [context =>  execute(context, 'ls')]
};

Core.install(router, api);



var server  = app.listen(5291, function () {
    var host = server.address().address;
    var port = server.address().port;
    Log.i(`app listening at http://${host}:${port}`);
});