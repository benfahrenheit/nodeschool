Promise.resolve("hello").then(console.log);
Promise.reject(new Error("pwned")).catch(console.log);