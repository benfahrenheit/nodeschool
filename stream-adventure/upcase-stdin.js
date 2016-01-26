var through2 = require('through2');

function transform(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
};

function flush(done) {
    done();
}

var stream = through2(transform, flush);
process.stdin.pipe(stream).pipe(process.stdout);