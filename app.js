var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname,'public')));
//port set
app.listen(3000,function(){
           console.log('Server Start.');
});

//routing set
app.get('/',function(req,res){
    fs.readFile('index.html',function(error,data){
        if(error) {
            console.log(error);
        }
        else {
            res.writeHead(200,{'Content-Type':'text/html'});//set headtype
            res.end(data);
        }
    });
});