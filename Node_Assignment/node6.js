var dns = require('dns');
const {hostname} = require('os');
var readLine = require('readline-sync')
var webAddress = readLine.question("Enter the any website address")

dns.lookup(`${webAddress}`,(err , address ,family)=>{
    if(err)console.log("error " + err);
console.log("INFO about " + webAddress)
    console.log("Address " + address);
    console.log("Family  " + family);



})
dns.resolve4(`${webAddress}`,(err, address)=>{

if(err) console.log(err);
console.log("INFO about " + webAddress)
console.log (` All ip addresses of ${webAddress} ` + JSON.stringify(address))
address.forEach((a)=>{
dns.reverse(a , (err ,hostname)=>{
if(err)console.log(err);
console.log(`Ip Address : ${a} , Hostname : ${hostname}`)

})

})


})