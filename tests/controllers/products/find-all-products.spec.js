const FindAllProductsController = require('../../../src/controllers/products/find-all-products');
const ServerError = require('../../../src/utils/errors/server');
const { serverError, success } = require('../../../src/utils/http/http-helper');
const ProductRepositorySpy = require('../mocks/mock-product-repository');

const makeSut = () => {
    const productRepositorySpy = new ProductRepositorySpy();
    const sut = new FindAllProductsController(productRepositorySpy);
    return {
        sut,
        productRepositorySpy,
    };
};

describe('FindAllProducts Controller', () => {
    it('should return 500 if ProductRepository findAll() throws', async () => {
        const { sut, productRepositorySpy } = makeSut();
        jest.spyOn(productRepositorySpy, 'findAll').mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(serverError(new ServerError(null)));
    });

    it('should return 200 if repository returns products', async () => {
        const { sut, productRepositorySpy } = makeSut();
        productRepositorySpy.result = [];
        const httpResponse = await sut.handle();
        expect(httpResponse).toEqual(success({ products: [] }));
    });
});
