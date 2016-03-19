"use strict";

new Promise((fulfill, reject) => {
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"));    
})
.then(
    console.log,
    (error) => { console.log(error.message); }
);