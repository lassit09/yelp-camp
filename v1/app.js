//require express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/ea37b3072af7063ed1584d05fb1d4e97e07ee3d21cac104497f1c47da7e8bcbd_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f1c47da7e8bcbd_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144394f5c579a2e4b0_340.jpg"}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//landing page route
app.get("/", function(req, res) {
    res.render("landing");
});

//campgrounds page
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

//post route
app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

//get
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

//catchall page
app.get("*", function(req, res) {
    res.send("THIS PAGE COULD NOT BE FOUND");
});

//make server listen
app.listen(3000, function() {
    console.log("The YelpCamp Server Has Started");
});