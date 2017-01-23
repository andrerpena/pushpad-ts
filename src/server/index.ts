import * as express from 'express';
import { router } from './routes/api';
import * as colors from 'colors';

var app = express();

app.use('/api', router);

app.listen(4000, '0.0.0.0', () => {
    console.log(colors.green(`Pushpad is listening on http://localhost:4000. NODE_ENV: ${process.env.NODE_ENV}`));
})