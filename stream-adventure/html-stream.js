var through2 = require('through2');
var trumpet = require('trumpet');

function transform(chunk, _, next) {
    this.push(chunk.toString().toUpperCase());
    next();
}

function flush(done) {
    done();
}

var tr = trumpet();
var selection = tr.select('.loud').createStream();
selection.pipe(through2(transform, flush)).pipe(selection);

process.stdin.pipe(tr).pipe(process.stdout);