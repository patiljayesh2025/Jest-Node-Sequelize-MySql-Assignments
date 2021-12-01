var express = require("express");
const app = express();


app.get('/getData', function(req, res) {
    res.json({

        empid: 1,
        name: "Jayesh ",
        dept: "IT ",
        designation: "Full Stack Consultant"
    });
});

app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
});