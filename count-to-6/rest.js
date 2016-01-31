module.exports = function average(...args) {
    var total = args.reduce((prev, curr) => prev += curr, 0);
    return total / args.length;
}