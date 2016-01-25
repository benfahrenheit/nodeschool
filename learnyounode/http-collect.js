var http = require('http');

var collectedResponse = '';

http.get(process.argv[2], function (resp) {
    resp.setEncoding('utf8');

    resp.on('data', function (chunk) {
        collectedResponse += chunk;
    });

    resp.on('end', function (err) {
        if (!err) {
            console.log(collectedResponse.length);
            console.log(collectedResponse);
        }
    });
});