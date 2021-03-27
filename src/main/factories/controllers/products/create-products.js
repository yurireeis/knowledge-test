const ProductsRepository = require('../../../../repositories/products');
const CreateProductController = require('../../../../controllers/products/create-product');
const makeCreateProductValidators = require('../../validators/product/create-product');

module.exports = () => {
    const repository = new ProductsRepository();
    const validators = makeCreateProductValidators();

    return new CreateProductController(repository, validators);
};
