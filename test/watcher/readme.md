## File change sync
前端静态文件改动检测

### 说明
> watcher.js 负责记录修改的文件,写入记录文件中, 需要一开始就开启
> change.js 负责对记录修改的文件进行操作
> config.js 负责读取配置文件
> 记录里面路径都采用绝对路径,暂不支持window

### 如何使用
------
#### 启动监测
`node xxx/watcher/watcher.js`

#### 修改后操作
`node xxx/watcher/change.js`

## PS
> 请不要删除配置文件和记录文件,否则程序可能无法正确执行
> 配置文件修改后,请重启watcher.js,否则无法生效