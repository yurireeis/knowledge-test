const SuppliersRepository = require('../../../../repositories/suppliers');
const FindAllSuppliersController = require('../../../../controllers/suppliers/find-all-suppliers');

module.exports = () => {
    const repository = new SuppliersRepository();

    return new FindAllSuppliersController(repository);
};
