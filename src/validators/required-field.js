const MissingParamError = require('../utils/errors/missing-param');

module.exports = class RequiredFieldValidator {
    constructor(fieldName) {
        this.fieldNames = Array.isArray(fieldName) ? fieldName : [fieldName];
    }

    validate(input) {
        const errors = [];

        for (const fieldName of this.fieldNames) {
            if (!input[fieldName]) {
                errors.push(new MissingParamError(fieldName));
            }
        }

        return errors;
    }
};
