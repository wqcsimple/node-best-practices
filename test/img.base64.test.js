/**
 * Created by whis on 11/17/16.
 */
var fs = require('fs');

var filePath = __dirname + '/../file/dog.jpg';

var bData = fs.readFileSync(filePath);

var base64Str = bData.toString('base64');

var dataUri = 'data:image/png;base64,' + base64Str;

console.log(dataUri);