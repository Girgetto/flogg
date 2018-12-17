const debug = require('debug');

let log;
const setLog = (prefix) => {
    log = debug(prefix);
}

const getLog = (extendLevel) => {
    if(!log){
        log = debug(`app:${extendLevel}`);
    }
    return log.extend(extendLevel);
}

module.exports = {
    setLog,
    getLog
}
