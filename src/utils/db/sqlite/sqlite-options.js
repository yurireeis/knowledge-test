const { Database } = require('sqlite3');

module.exports = {
    driver: Database,
    filename: ':memory:',
};
