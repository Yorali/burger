var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var app = express();

var port = process.env.PORT || 4000;

app.use("/static", express.static('public'));
app.use(bodyParser.urlencoded({ extended:false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port, function() {
    console.log("Connected at port: " + port);
});
