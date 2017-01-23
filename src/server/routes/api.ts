import * as express from 'express';
var router = express.Router();

router.route('/test').get((req, res) => {
    res.status(200).send({
        text: 'your test has passed'
    })
});

export { router }