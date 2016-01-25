var http = require('http');
var mapper = require('through2-map');

var server = http.createServer(function (request, response) {
    
    if (request.method !== "POST") {
        return response.end("Hey, POSTs only");
    }
    
    request.pipe(mapper(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
    
});

server.listen(process.argv[2]);