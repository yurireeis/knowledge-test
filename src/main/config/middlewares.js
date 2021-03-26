const bodyParser = require('../middlewares/body-parser');
const urlEncoded = require('../middlewares/url-encoded');

module.exports = (app) => {
    app.use(bodyParser);
    app.use(urlEncoded);
};
