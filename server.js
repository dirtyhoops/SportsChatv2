var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    app = express(),
    path = require("path");

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/CAHproject');

app.use(express.static( __dirname + '/public/dist/public' ));



app.all('*', function(req, res){
    res.sendFile(path.resolve('./public/dist/public/index.html'))
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})