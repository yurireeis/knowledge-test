const SuppliersRepository = require('../../../../repositories/suppliers');
const CreateSupplierController = require('../../../../controllers/suppliers/create-supplier');
const makeCreateSupplierValidators = require('../../validators/supplier/create-supplier');

module.exports = () => {
    const repository = new SuppliersRepository();
    const validators = makeCreateSupplierValidators();

    return new CreateSupplierController(repository, validators);
};
