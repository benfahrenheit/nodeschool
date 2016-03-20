"use strict";

const http = require("q-io/http");

http.read("http://localhost:7000")
    .then((value) => { return http.read(`http://localhost:7001/${value}`) })
    .then((value) => { console.log(JSON.parse(value)); })
    .catch(console.error);