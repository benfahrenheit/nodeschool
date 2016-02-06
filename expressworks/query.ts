import * as express from 'express';

var app = express();

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.listen(process.argv[2], () => {
    console.log(`listening on port ${process.argv[2]}`);
});