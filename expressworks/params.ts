import * as crypto from 'crypto';
import * as express from 'express';

var app = express();

app.put('/message/:id', (req, res) => {
    var hash = crypto.createHash('sha1')
                     .update(new Date().toDateString())
                     .update(req.params.id)
                     .digest('hex');
    res.end(hash);
})

app.listen(process.argv[2], () => {
    console.log(`listening on port ${process.argv[2]}`);
});