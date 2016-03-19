"use strict";

new Promise((fulfill, reject) => {
    setTimeout(() => { reject(new Error("REJECTED!")); }, 300);
})
.then(
    console.log,
    (error) => { console.log(error.message); }
);