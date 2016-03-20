"use strict";

function all(promise1, promise2) {
    let counter = 0;
    let allValues = [];
    
    return new Promise((fulfill, reject) => {
        promise1.then((value) => {
            allValues[0] = value;
            if (++counter === 2) {
                fulfill(allValues);
            }        
        });
        
        promise2.then((value) => {
            allValues[1] = value;
            if (++counter === 2) {
                fulfill(allValues);
            }
        })
    });
}

all(getPromise1(), getPromise2()).then(console.log);