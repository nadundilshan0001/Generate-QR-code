
const express = require("express");
const bodyParser = require("body-parser");
const qr = require("qr-image");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    const URL = req.body.url;   
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('QR Image.png'));
})

app.listen("3000", function(){
    console.log("Server is running on port 3000");
});