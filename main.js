var http = require('http');

var port = process.argv[2];

var serverCB = function (req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello World\n');
};

var server = http.createServer(serverCB);

server.listen(port);
console.log('server is listening at Port: '+ port);