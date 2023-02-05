//Loading the entire module
const os = require("os");
console.log(os.uptime());

// Loading the module and extracting certain functions by means of destructuting

const { uptime } = require("os");
console.log(uptime());
