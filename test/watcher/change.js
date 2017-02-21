/**
 * Created by whis on 2/21/17.
 */
const glob = require("glob-plus");
const getConfig = require('./config.js');
const log4js = require('log4js');
const fs = require('fs');
const path = require('path');

log4js.configure({
    appenders: [{
        type: 'console',
        layout: {
            pattern: '[%r] [%p][%c] - %m%n'
        }
    }]
});
let log = log4js.getLogger();


let _rootPath = '',
    _uploadType = "",
    _recordFile = '',
    _recordFilePath = "",
    _configJsonFile = '',
    _relativePath = '';

let _readRecordFileArray = [], _assetsRecordFileArray = [], _allRecordFileArray = [];

/**
 *
 * 根据读取的文件记录查找相关的文件,主要是处理fis3 压缩之后的文件.
 * @param n
 * @param callback
 */
function findRecordAssetsFile(n, callback) {
    let matchString = '', string = transAbsolutePathToRelativePath(_readRecordFileArray[n], _rootPath);
    //如果是有后缀的,则直接匹配文件名
    if (string.match(/\.\w+$/g)) {
        matchString = '_assets/' + string + '**';
    } else {
        //没有后缀的则直接匹配文件夹下的所有文件
        _readRecordFileArray.splice(n, 1);
        n--;
        if (string != '')
            matchString = '**/' + string + '/**';
        else
            matchString = '';
    }
    let plus = glob.plus(_relativePath + matchString, {ignore: 'node_modules/**'});
    plus.on('file', ({name, stats, data}) => {
        let reg = new RegExp(_relativePath);
        let absoluteNamePath = name.replace(reg, _rootPath);
        _assetsRecordFileArray.push(absoluteNamePath);
    });
    plus.on('end', () => {
        let index = n + 1;
        if (index < _readRecordFileArray.length)
            findRecordAssetsFile(index, callback);
        else {

            if (_uploadType == 'assetsToAssets') {
                _allRecordFileArray = _assetsRecordFileArray;
            } else if (_uploadType == 'normalToAssets') {
                _allRecordFileArray = _readRecordFileArray;
            } else {
                _allRecordFileArray = _readRecordFileArray.concat(_assetsRecordFileArray);
            }

            log.debug('要操作的所有的相关的文件', _allRecordFileArray);
            if (callback)
                callback();
        }
    })
}

function transAbsolutePathToRelativePath(path, rootPath) {
    let reg = new RegExp(rootPath);
    return path.replace(reg, '');
}

/**
 * 使用同步读取文件的api,保证在上传时已经读出记录
 * 读出记录文件的数据,处理成json或者array
 * 第一行默认是注释,数据从第二行开始,用"\n"分割
 * @param recordFilePath
 * @param mode
 */
function readRecordFile(recordFilePath, mode) {
    let _mode = mode ? mode : "utf8";
    let data = fs.readFileSync(recordFilePath, _mode);
    return data.split('\n');
}

/**
 * 读取记录文件,上传修改文件
 *
 * readRecordFile 的问题是所有改变了"修改时间"的文件都会被记录,而不是真正的内容变化
 * 而fis3 release之后的所有的文件的"修改时间"都更新了
 *
 * @hanck: 只把记录里的文件作为基础,再把压缩后的同名文件匹配出来,然后再上传到OSS
 *
 */
getConfig.findConfigJsonFile(config => {
    log.info(config);

    _rootPath = config.rootPath;
    _configJsonFile = _rootPath + config.configFileName;
    _recordFilePath = _rootPath + config.recordFileName;
    _relativePath = config.relativePath;
    _rootPath = config.rootPath;
    _recordFile = _rootPath + config.recordFileName;
    log.debug(_recordFile);

    _uploadType = config.uploadType ?  config.uploadType : _uploadType;

    _readRecordFileArray = readRecordFile(_recordFile, 'utf8');

    findRecordAssetsFile(0, () => {
        console.log(_allRecordFileArray);
    });
});