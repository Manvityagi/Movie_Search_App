var express = require("express");
var app = express();
var request = require('request');
app.set("view engine", "ejs");

app.get("/results", function(req,res){
    var s = req.query.searchterm ;
   request("http://www.omdbapi.com/?s=" + s + "&apikey=thewdb",function(error, response, body){
       if(!error && response.statusCode == 200) {
           var data = JSON.parse(body);
           res.render("results",{data: data}); 
       }
   });
});

app.get("/",function(req,res){
   res.render("search"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("movie app started")
});