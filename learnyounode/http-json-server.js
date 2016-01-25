var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    
    var urlElements = url.parse(request.url, true);
    var targetDate = new Date(urlElements.query.iso);
    
    if (urlElements.pathname === '/api/parsetime') {
        
        var parsedTime = {
            hour: targetDate.getHours(),
            minute: targetDate.getMinutes(),
            second: targetDate.getSeconds()
        };
        
        response.end(JSON.stringify(parsedTime));
        
    } else if (urlElements.pathname === '/api/unixtime') {
        
        var unixTime = {
            unixtime: Math.round(targetDate.getTime())
        };
        
        response.end(JSON.stringify(unixTime));
    }
    
});

server.listen(process.argv[2]);