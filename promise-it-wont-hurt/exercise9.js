"use strict";

function parsePromised() {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(process.argv[2]));
        } catch(e) {
            reject(e);
        }
    })
}

parsePromised().then(console.log, console.log);