var args = process.argv.slice(2);

var mapped = args.map(x => x[0])
                 .reduce((prev, curr) => prev + curr);

console.log(`[${args}] becomes "${mapped}"`);