/**
 * Faable.com Miniloger with colors
 */
import * as path from 'path';
import {setupLog, setLog} from './config';

// Setup log name
let logname = 'nologname';
if(module.parent){
    logname = path.basename(module.parent.filename).split('.')[0];
}
delete require.cache[__filename];

const {debug,log,warn,err} = setupLog(logname);

export {debug,log,warn,err};
export {setLog};

