'use strict'

import * as express from 'express';
import * as fs from 'fs';

// yeah, yeah I know about libs that will promisify stuff for me.
// but i wanted to try it myself. for learnin' and stuff.
let readFile = (filename) => {
  return new Promise<Buffer>((resolve, reject) => {
     fs.readFile(filename, (err, data) => {
        if (err) {
            return reject(err);
        }
        resolve(data);
     });
  });
};

let booksPath:string = process.argv[3];
let app = express();

app.get('/books', async (req, res) => {
    let data:Buffer = await readFile(booksPath);
    let booksObj = JSON.parse(data.toString());
    res.json(booksObj);
});

app.listen(process.argv[2], () => {
    console.log(`listening on ${process.argv[2]}`);
})