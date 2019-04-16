/**
 * @author whis admin@wwhis.com
 * @Created 2019-04-16
 */
const logger = require('../lib/logger');
// const log4js = require('log4js');
// //  日志配置
// log4js.configure({
//     appenders: {
//         out: {
//             type: 'stdout', layout: {
//                 type: 'pattern',
//                 pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p][%c] - %m%n'
//             }
//         }
//     },
//     categories: {default: {appenders: ['out'], level: 'debug'}}
// });
//
// let logger = log4js.getLogger();
// logger.level = 'debug';


logger.debug("whis", 11);
logger.info("whis", 11);

logger.error('Cheese is too ripe!');

