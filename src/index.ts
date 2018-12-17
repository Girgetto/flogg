/**
 * Faable.com Miniloger with colors
 */
const path = require('path');
const {getLog} = require('./config');

const logname = path.basename(module.parent.filename).split('.')[0];

delete require.cache[__filename];

const LogLevel = {
    DEBUG:{label:'debug', color:'blue'},
    WARN:{label:'warn', color:'yellow'},
    ERROR:{label:'error', color:'red'},
    LOG:{label:'log', color:'green'}
}

const getLoggerWithName = (level) => getLog(`${level.label}:${logname}`);

module.exports = {
    debug: (m) => getLoggerWithName(LogLevel.DEBUG)(m),
    log: (m) => getLoggerWithName(LogLevel.LOG)(m),
    warn: (m) => getLoggerWithName(LogLevel.WARN)(m),
    err: (m) => getLoggerWithName(LogLevel.ERROR)(m),
};
