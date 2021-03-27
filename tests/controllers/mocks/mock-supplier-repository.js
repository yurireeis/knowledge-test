module.exports = class SupplierRepositorySpy {
    constructor() {
        this.result = 0;
    }

    async findAll() {
        return this.result;
    }

    async create(params) {
        this.params = params;
        return this.result;
    }
};
