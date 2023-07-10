const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// get system uptime (seconds)
const uptime = os.uptime();
console.log(`The uptime is ${uptime} seconds`);

// OS details
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);