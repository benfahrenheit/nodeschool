"use strict";

new Promise((fulfill, reject) => {
    setTimeout(() => { fulfill("FULFILLED!"); }, 300);
})
.then(console.log);