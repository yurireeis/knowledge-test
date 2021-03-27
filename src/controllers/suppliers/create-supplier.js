const { serverError, noContent, badRequest } = require('../../utils/http/http-helper');

module.exports = class CreateProductController {
    constructor(repository, validation) {
        this.repository = repository;
        this.validation = validation;
    }

    async handle(request) {
        try {
            const errors = this.validation.validate(request.body);
            if (errors.length > 0) {
                return badRequest(errors);
            }

            const serializedSuppliers = this.serializeSuppliersToDb(request.body);
            await this.repository.create(serializedSuppliers);
            return noContent();
        } catch (error) {
            return serverError(error);
        }
    }

    serializeSuppliersToDb(suppliers) {
        suppliers = Array.isArray(suppliers) ? suppliers : [suppliers];

        return suppliers.map(supplier => ([
            supplier.name,
            supplier.country,
        ]));
    }
};
