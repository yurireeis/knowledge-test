const SuppliersRepository = require('../../src/repositories/suppliers');

jest.mock('../../src/main/factories/db', () => {
    return () => ({
        persistMany: () => mockCreateProductParams().length,
        select: () => []
    });
});

const mockCreateProductParams = () => ([[
    'valid_name',
    'valid_country',
]]);

const makeSut = () => {
    return new SuppliersRepository();
};

describe('SuppliersRepository', () => {
    describe('create()', () => {
        it('should return inserted rows length on success', async () => {
            const sut = makeSut();
            const params = mockCreateProductParams();
            const insertedRows = await sut.create(params);
            expect(insertedRows).toBe(1);
        });
    });

    describe('findAll()', () => {
        it('should return suppliers list', async () => {
            const sut = makeSut();
            const suppliers = await sut.findAll();
            expect(suppliers).toEqual([]);
        });
    });
});
