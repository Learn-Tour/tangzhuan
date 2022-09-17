// Importing node modules
const express = require("express");
const pug = require("pug");
const path = require("path");

// Initializing express app
const app = express();

// Setting our view engine to pug
app.set("view engine", "pug");

// Setting our default views
app.set("views", __dirname + "/pugs");

// Serving public assets
app.use(express.static(
	path.join(__dirname + "/html")));

// Home page will render "index.pug"
// file. ".pug" extension is not
// required. Express takes care of
// it behind the scenes
app.get("/", (req, res) => {
    console.log("req:",req);
	res.render("index");
});

// Listening our app on port 3000
app.listen(3000, () => console.log('Test running \n http://localhost:3000 \n by:袁俊杰'))
