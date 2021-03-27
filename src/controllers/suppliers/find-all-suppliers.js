const { serverError, success } = require('../../utils/http/http-helper');

module.exports = class FindAllSuppliersController {
    constructor(repository) {
        this.repository = repository;
    }

    async handle() {
        try {
            const suppliers = await this.repository.findAll();
            return success({ suppliers });
        } catch (error) {
            return serverError(error);
        }
    }
};
