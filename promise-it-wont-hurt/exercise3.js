"use strict";

var p = new Promise((fulfill, reject) => {
    setTimeout(() => { reject(new Error("REJECTED!")); }, 300);
});

p.then(
    (value) => { console.log(value); },
    (error) => { console.log(error.message); }
);