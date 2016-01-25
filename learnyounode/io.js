var fs = require('fs');

var testFile = process.argv[2];
var testStream = fs.readFileSync(testFile);
var numLines = testStream.toString().split('\n').length - 1;

console.log(numLines);