/**
 * Faable.com Miniloger with colors
 */
import path from 'path';
import {getLog, setLog} from './config';

// Setup log name
let logname = 'log';
if(module.parent){
    path.basename(module.parent.filename).split('.')[0];
}

delete require.cache[__filename];

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

const getLoggerWithName = (level:LogLevel) => (m:string) => getLog(`${LogLevelDecoder[level].label}:${logname}`)(m);

export const debug = getLoggerWithName(LogLevel.DEBUG);
export const log = getLoggerWithName(LogLevel.LOG);
export const warn = getLoggerWithName(LogLevel.WARN);
export const err = getLoggerWithName(LogLevel.ERROR);

export {getLog, setLog};
