const { adaptRoute } = require('../adapters/express-router-adapter');
const makeFindAllProductsController = require('../factories/controllers/products/find-all-products');
const makeCreateProductController = require('../factories/controllers/products/create-products');

module.exports = (router) => {
    router.get('/products', adaptRoute(makeFindAllProductsController()));
    router.post('/products', adaptRoute(makeCreateProductController()));
};
