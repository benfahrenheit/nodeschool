import * as express from 'express';
import * as stylus from 'stylus';

var assetDir = process.argv[3];
if (!assetDir) {
    console.log('usage <script> <port> <assetDir>');
    process.exit(-1);
}

var app = express();

app.use(stylus.middleware(assetDir));
app.use(express.static(assetDir));

app.listen(process.argv[2], () => {
    console.log(`Listening on port ${process.argv[2]}`);
});