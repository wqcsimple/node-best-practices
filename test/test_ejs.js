/**
 * Created by whis on 10/14/16.
 */
var fs = require('fs');
var Log = require('node-api-base').Log;
var Util = require('node-api-base').Util;
var ejs = require('ejs');


var filePath = __dirname + "/../template/demo.ejs";

var demoTemplate = fs.readFileSync(filePath, 'utf8');

var result = ejs.render(demoTemplate, {
    title: "whis"
});

var file = __dirname + "/../app/demo.js";

var command = `mkdir ./app && touch ${file}`;

Util.execute(command)
    .then(() => {

        Util.writeFile(file, result);
    })
    .catch(e => {
        Log.e("error execute");
    });







