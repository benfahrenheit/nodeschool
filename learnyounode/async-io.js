var fs = require('fs');

fs.readFile(process.argv[2], function(err, buffer) {
    if (!err) {
        var numLines = buffer.toString().split('\n').length - 1;
        console.log(numLines);
    }
});