var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var ngcompile = require('ng-node-compile');

app.use( bodyParser.json() );
 
app.get('/', function (req, res) {
  res.json('Template parser');
});
app.post('/api/v1/generate', function(req, res) {
    ngcompile.prototype.onEnvReady(function(){
        var ng = new ngcompile();
        ng.onReady(function(){
            res.json({html: ng.$compile(req.body.html)(req.body.params)});
        });
    });
});
 
app.listen(80);