var http = require('http');

var responses = ['', '', ''];
var numCompleted = 0;

function runHttpGet(index) {
    http.get(process.argv[2 + index], function(resp) {
       resp.setEncoding('utf8');
       
       resp.on('data', function (chunk) {
           responses[index] += chunk;
       })
       
       resp.on('end', function (err) {
           if (!err) {
               numCompleted++;
           }
           
           if (numCompleted === 3) {
               console.log(responses[0]);
               console.log(responses[1]);
               console.log(responses[2]);
           }
       })
        
    });
}

for (var index = 0; index <= 2; index++) {
    runHttpGet(index);
}
