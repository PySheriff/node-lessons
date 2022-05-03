const express = require("express");
const app = express();
const http = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    console.log("Hello")
    res.send("<h1>HELLO</h1>");
})

app.listen(8000, function(){
    console.log("Server is running on port 8000");
})