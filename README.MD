# node person experience
Nodejs Api best practice and core components

# usage
引入最佳实践类库
in package.json
```json
  "dependencies": {
    "node-api-base" : "git@github.com:zdix/node-api-best-practice.git"
  }
```

# 爬虫使用心得
`test/node.spider.test.js`


# 生成模板文件
`test/ejs.test.js`


# 服务端和客户端长连接
`client.js`, `server.js`

# Socket.io
`socket.io.js`

# Mysql 用法
```
var mysqlClient = Mysql.client();

function get() {
    mysqlClient.select('*').from('open_app').where({id: 1}).first().then(openApp => {
        Log.i(Util.getFormattedJson(openApp));
    })
}

```

# Dns解析
`test/dns.test.js`

# 将图片转成datauri 
`test/img.base64.test.js`

# TCP连接
`test/tcp/*`

# Puppeteer
调用chrome浏览器的API
1. 一般用于打开指定页面然后进行截屏生成图像，或者生成pdf
