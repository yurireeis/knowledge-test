const { serverError, badRequest, created } = require('../../utils/http/http-helper');

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

            const serializedProducts = this.serializeProductsToDb(request.body);
            await this.repository.create(serializedProducts);
            return created(request.body);
        } catch (error) {
            return serverError(error);
        }
    }

    serializeProductsToDb(products) {
        products = Array.isArray(products) ? products : [products];

        return products.map(product => ([
            product.description,
            product.supplier_id,
        ]));
    }
};
