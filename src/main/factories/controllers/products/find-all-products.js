const ProductsRepository = require('../../../../repositories/products');
const FindAllProductsController = require('../../../../controllers/products/find-all-products');

module.exports = () => {
    const repository = new ProductsRepository();

    return new FindAllProductsController(repository);
};
