const ProductsRepository = require('../../src/repositories/products');

jest.mock('../../src/main/factories/db', () => {
    return () => ({
        persistMany: () => mockCreateProductParams().length,
        select: () => []
    });
});

const mockCreateProductParams = () => ([[
    'valid_description',
    'valid_supplier_id',
]]);

const makeSut = () => {
    return new ProductsRepository();
};

describe('ProductsRepository', () => {
    describe('create()', () => {
        it('should return inserted rows length on success', async () => {
            const sut = makeSut();
            const params = mockCreateProductParams();
            const insertedRows = await sut.create(params);
            expect(insertedRows).toBe(1);
        });
    });

    describe('findAll()', () => {
        it('should return products list', async () => {
            const sut = makeSut();
            const products = await sut.findAll();
            expect(products).toEqual([]);
        });
    });
});
