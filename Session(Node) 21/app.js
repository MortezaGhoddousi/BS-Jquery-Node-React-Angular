var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var urlEncoded = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
    console.log(req.url);
    res.render("index");
});

app.get("/contact", function (req, res) {
    console.log(req.url);
    res.render("contact");
});

app.post("/contact", urlEncoded, function (req, res) {
    // console.log(req.url);
    console.log(req.body);
    res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", function (req, res) {
    console.log(req.url);
    var data = {
        age: 19,
        job: "Developer",
        hobbies: ["eating", "fighting", "fishing"],
    };
    res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
