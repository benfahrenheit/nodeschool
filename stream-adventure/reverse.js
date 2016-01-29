var concat = require('concat-stream');
var esrever = require('esrever');

function reverse(body) {
    console.log(esrever.reverse(body.toString()));
}

process.stdin.pipe(concat(reverse));