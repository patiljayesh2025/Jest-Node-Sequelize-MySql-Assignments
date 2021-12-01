var events = require("events");
var emitter = new events.EventEmitter();


var listner1 = function listner1() {
    console.log("Listner1 Executed");
}
var listner2 = function listner2() {
    console.log("Listner2 Executed");
}

emitter.on("myEvent1", listner1);
emitter.on("myEvent2", listner2)
emitter.emit("myEvent1")
emitter.emit("myEvent2");