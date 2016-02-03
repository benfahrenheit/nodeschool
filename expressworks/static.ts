import * as express from 'express';

var app = express();
app.use(express.static(process.argv[3]));
app.listen(process.argv[2], () => {
    console.log(`Listening on port ${process.argv[2]}`);
});