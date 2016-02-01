var name = process.argv[2];
var comment = process.argv[3];

console.log(html`<b>${name} says</b>: "${comment}"`);

function html(fmt, ...args) {
    var result = fmt[0];
    for (var x = 1; x <= args.length; ++x) {
        result += htmlescape(args[x-1]);
        result += fmt[x];
    }
    return result;
}

function htmlescape(x) {
    return x
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}