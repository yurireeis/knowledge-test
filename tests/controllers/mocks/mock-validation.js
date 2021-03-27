module.exports = class ValidationSpy {
    constructor() {
        this.error = [];
    }

    validate(input) {
        this.input = input;
        return this.error;
    }
};
