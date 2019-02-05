
# Flogg - Faable logger for node

[![npm version](https://badge.fury.io/js/flogg.svg)](https://badge.fury.io/js/flogg)
![npm install](https://nodei.co/npm/@faable/flogg.png?mini=true)

Faable.com logger for node.js that uses `debug` module and customizes it for log file scoping.

## How to use it

In `package.json` set the `DEBUG` env variable:

```javascript
{
    ...
    "scripts":{
        "dev":"DEBUG=api:* node myapp.js"
    }
    ...
}
```

Then before doing anything require flog and set the log prefix:

```javascript
const { setLog } = require("../dist/flogg");

// setLog should be called only once
setLog("api");
```

In all other files, just require `flogg` and it will set automatically the log prefix based on filename. Example for a file named `microscope.js`:

```javascript
const { debug } = require("../dist/flogg");
debug("¡Hi!");
```

This code will print if `DEBUG` env variable is set to `api:*`:
```
api:debug:miscroscope ¡Hi!
```