const SQLiteAdapter = require('../../../utils/db/sqlite/sqlite-adapter');
const options = require('../../../utils/db/sqlite/sqlite-options');

module.exports = () => {
    return SQLiteAdapter.getInstance(options);
};
