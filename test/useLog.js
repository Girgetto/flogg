const { setLog, debug } = require("../dist/flogg");

const appName = "api";
setLog(appName);
debug("Hi");

