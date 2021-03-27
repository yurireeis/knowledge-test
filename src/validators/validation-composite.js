module.exports = class ValidationComposite {
    constructor(validations) {
        this.validations = validations;
    }

    validate(data) {
        const inputs = Array.isArray(data) ? data : [data];

        for (const validation of this.validations) {
            for (const input of inputs) {
                const errors = validation.validate(input);

                if (errors.length > 0) {
                    return errors;
                }
            }
        }

        return [];
    }
};
