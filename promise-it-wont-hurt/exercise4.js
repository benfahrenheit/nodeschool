"use strict";

var p = new Promise((fulfill, reject) => {
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"));    
});

p.then(
    (value) => { console.log(value); },
    (error) => { console.log(error.message); }
);