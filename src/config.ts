const debug = require('debug');

let log:any;

export const setLog = (prefix:string):any => {
    log = debug(prefix);
}

export const getLog = (extendLevel:string):any => {
    if(!log){
        log = debug(`app:${extendLevel}`);
    }
    return log.extend(extendLevel);
}

enum LogLevel {
    DEBUG = 'DEBUG',
    WARN = 'WARN',
    ERROR = 'ERROR',
    LOG = 'LOG'
}

class LogLevelDecoder {
    static DEBUG = {label:'debug', color:'blue'};
    static WARN = {label:'warn', color:'yellow'};
    static ERROR = {label:'error', color:'red'};
    static LOG = {label:'log', color:'green'};
}

const getLoggerWithName = (level:LogLevel, logname:string) => (m:string) => getLog(`${LogLevelDecoder[level].label}:${logname}`)(m);

export const setupLog = (logName:string) => {
    return {
        debug: getLoggerWithName(LogLevel.DEBUG, logName),
        log: getLoggerWithName(LogLevel.LOG, logName),
        warn: getLoggerWithName(LogLevel.WARN, logName),
        err: getLoggerWithName(LogLevel.ERROR, logName)
    }
}
