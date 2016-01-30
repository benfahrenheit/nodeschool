var spawn = require('child_process').spawn;
var Duplex = require('stream').Duplex;
var util = require('util');

function CmdStream(options, cmd, args) {
    Duplex.call(this, options);
    this.ps = spawn(cmd, args);
}

util.inherits(CmdStream, Duplex);

CmdStream.prototype._read = function(size) {
    return this.ps.stdin._read(size);
}

CmdStream.prototype._write = function(chunk, encoding, callback) {
    return this.ps.stdout._write(chunk, encoding, callback);
}

module.exports = function(cmd, args) {
    
    return new CmdStream(null, cmd, args);
    
}