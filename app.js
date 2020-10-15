var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
const port = process.env.PORT || 3000;

//ejs init
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//use public directory
app.use(express.static(path.join(__dirname,'/public')));

//port set
app.listen(port,function(){
    console.log('Server running at port ' + port);
});

//routing set
app.get('/',function(req,res){
	res.render("index", {
		test : "ok"
	});
});

app.get("*", (req, res) => {
	res.end("<title>404 Error</title><h1>404 Error</h1>")
});