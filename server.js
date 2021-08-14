const express = require('express');
const bodyParser = require('body-parser');
const verifySlackRequest = require('./verifySlackRequest');
const brain = require('./brain');

const app = express();
const env = process.env.NODE_ENV || 'development';
const host = env === 'production' ? undefined : 'localhost';
const port = parseInt(process.env.PORT || 3000, 10);

const urlencodedParser = bodyParser.raw({
    type: 'application/x-www-form-urlencoded',
    inflate: true,
    limit: '100kb',
});

const formatSlackMessage = message => {
    return {
        response_type: 'in_channel',
        text: message,
        attachments: [],
    };
};

app.post('/', urlencodedParser, (req, res) => {
    if (verifySlackRequest(req)) {
        return Promise.resolve()
            .then(() => {
                return formatSlackMessage(brain.say());
            })
            .then(response => {
                res.json(response);
            })
            .catch(err => {
                console.error(err);
            });
    }
});

app.use('/*', (err, req, res, next) => {
    console.error(err);
    next();
});

const server = app.listen(port, host, () => {
    const address = server.address();
    const url = `http://${address.host || 'localhost'}:${port}`;
    console.info(`Listening at ${url}/`);
});
