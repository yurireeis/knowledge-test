const InvalidParamError = require('../utils/errors/invalid-param');

module.exports = class SchemaValidator {
    constructor(schema) {
        this.schema = schema;
    }

    validate(input) {
        return Object
            .keys(this.schema)
            .filter(key => !this.schema[key](input[key]))
            .map(key => new InvalidParamError(key));
    }
};
