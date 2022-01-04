var http = require('http')
var url = require('url')
var querystring = require('querystring')

var server = http.createServer(function(req,res){
    var query = url.parse(req.url).query;
    var name = querystring.parse(query)['name'];
    var branch= querystring.parse(query)['branch'];

console.log("Name: ",name);
console.log("Branch: ",branch);
}).listen(3000);
console.log("Server started on port no. 3000!!!");