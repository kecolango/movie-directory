const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.listen(3000, function() {
    console.log("Server started on port 3000");
});