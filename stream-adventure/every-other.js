var through2 = require('through2');
var split = require('split');

var shouldUpcase = false;

function transform(line, _, next) {
    if (line) {
        if (shouldUpcase) {
            this.push(line.toString().toUpperCase() + '\n');
        } else {
            this.push(line.toString().toLowerCase() + '\n');
        }

        shouldUpcase = !shouldUpcase;
    }
    next();
}

function flush(done) {
    done();
}

process.stdin
    .pipe(split())
    .pipe(through2(transform, flush))
    .pipe(process.stdout)