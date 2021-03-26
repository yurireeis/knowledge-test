const { adaptRoute } = require('../adapters/express-router-adapter');
const makeFindAllProductController = require('../factories/controllers/products/find-all-products');

module.exports = (router) => {
    router.get('/products', adaptRoute(makeFindAllProductController()));
};
