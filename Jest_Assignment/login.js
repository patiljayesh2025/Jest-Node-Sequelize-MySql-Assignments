function login(u, p) {


    let found = logindeets.find(found => found.uid === u && found.pwd === p);
    if (found == undefined)
        return "Invalid User";
    else
        return "Valid User";

}
var logindeets = [{
        uid: "Jayesh",
        pwd: "123"
    },
    {
        uid: "Jayesh",
        pwd: "1234",

    },
    {
        uid: "Ramesh",
        pwd: "ramesh"

    }
]



module.exports = {
    login
}