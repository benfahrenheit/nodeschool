import * as express from 'express';
import * as fs from 'fs';

var booksPath = process.argv[3];

var app = express();

app.get('/books', (req, res) => {
    fs.readFile(booksPath, (err, data) => {
        if (!err) {
            var books = JSON.parse(data.toString());
            res.json(books);
        }
    });
});

app.listen(process.argv[2], () => {
    console.log(`listening on ${process.argv[2]}`);
})