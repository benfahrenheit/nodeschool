import * as bodyparser from 'body-parser'; 
import * as express from 'express';

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2], () => {
    console.log('up and running');
})