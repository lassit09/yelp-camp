//require express
var express = require('express');
var app = express();

app.set("view engine", "ejs");

//landing page route
app.get("/", function(req, res) {
    res.render("landing");
});

//campgrounds page
app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://ridb.recreation.gov/images/82950.jpg"},
        {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aROYLPJmJXqDOlCRb5MAwSrUODid-cCOBZ2gy6LClH9gvxoI"},
        {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJU8kuRKQ9SzP-XwuupkYAM910WgyR3o3V3MB5adzCr0xk0vF"}
    ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

//catchall page
app.get("*", function(req, res) {
    res.send("THIS PAGE COULD NOT BE FOUND");
});

//make server listen
app.listen(3000, function() {
    console.log("The YelpCamp Server Has Started");
});