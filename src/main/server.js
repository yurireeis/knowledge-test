const { port } = require('./config/env');
const makeDbInstance = require('./factories/db');

const db = makeDbInstance();

db
    .connect()
    .then(() => {
        const app = require('./config/app');
        app.listen(port, () => console.log(`Server running at: ${port}`));
    });
