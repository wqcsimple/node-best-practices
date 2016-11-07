/**
 * Created by whis on 11/1/16.
 * http://bupt-hjm.github.io/2016/10/31/nodejs-spider-experience/
 */
const Log = require('node-api-base').Log;
var Util = require('node-api-base').Util;

const charset = require('superagent-charset');
const superagentRetry = require('superagent-retry');
const cheerio = require('cheerio');
const superAgent = require('superagent');

var xlsx = require('node-xlsx');
var fs = require('fs');


charset(superAgent);                    // 加载编码
superagentRetry(superAgent);            // 重复请求

var filePath = __dirname + '/../spider_file/spider_content.txt';

var url = "http://whis.wang";
superAgent.post(url).charset('utf8') //指定编码
          // .set(headers)       // 设置请求头
          // .set('Cookie', cookie) // 设置cookie
          // .type('form')
          .send({
                //表单数据
          })
          .retry(2) // 在响应前请求两次
          .end(function(err, res) {

              if (err) {
                  return Log.e(err);
              }

              // console.log(err);
              // console.log(res);
              if (res.ok) {

                  $ = cheerio.load(res.text);
                  var content = $("h2.article-title").text();

                  Util.writeFile(filePath, content);
              }

              //数据与错误处理
          });



// excel 操作
var data = [
    [1, 2, 3],
    [true, false, null, 'sheetjs'],
    ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
    ['baz', null, 'qux']
];

var buffer = xlsx.build([{
    name: 'mySheet',
    data: data
}]);

fs.writeFile(__dirname + '/../spider_file/test.xlsx', buffer, {
    'flag': 'w+'
}, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("写入成功");
});
