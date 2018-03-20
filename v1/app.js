//require express
var express = require('express');
var app = express();

app.set("view engine", "ejs");

//landing page route
app.get("/", function(req, res) {
    res.render("landing");
});

//catchall page
app.get("*", function(req, res) {
    res.send("THIS PAGE COULD NOT BE FOUND");
});

//make server listen
app.listen(3000, function() {
    console.log("The YelpCamp Server Has Started");
});