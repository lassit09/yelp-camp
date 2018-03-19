//require express
var express = require('express');
var app = express();

//homepage route
app.get("/", function(req, res) {
    res.send("THIS IS THE HOMEPAGE");
});

//make server listen
app.listen(3000, function() {
    console.log("The YelpCamp Server Has Started");
});