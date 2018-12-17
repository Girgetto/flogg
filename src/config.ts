const debug = require('debug');

let log:any;

export const setLog = (prefix:string) => {
    log = debug(prefix);
}

export const getLog = (extendLevel:string) => {
    if(!log){
        log = debug(`app:${extendLevel}`);
    }
    return log.extend(extendLevel);
}
