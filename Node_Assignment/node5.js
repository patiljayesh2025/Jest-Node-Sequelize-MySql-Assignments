var os = require("os");
console.log("Architecture " + os.arch())
console.log("No of CPUS " + os.cpus())
console.log("Free Memory " + os.freemem + "bytes")
console.log("Home Directory " + os.homedir)
console.log("Network Interfaces " +  JSON.stringify(os.networkInterfaces()))
console.log("Platform  " + os.platform())
console.log("Release " + os.release())
console.log("Temporary Directory " + os.tmpdir()) 
console.log("Total Memory " + os.totalmem())
console.log("Os Type " + os.type());
console.log("CPU Uptime " +os.uptime())