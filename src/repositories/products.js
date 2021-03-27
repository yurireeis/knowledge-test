const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class ProductsRepository {
    async findAll() {
        const sql = `
            SELECT
                id,
                description,
                supplier_id
            FROM
                products
        `;
        const products = await db.select(sql);

        return products;
    }

    async create(products) {
        const sql = `
            INSERT INTO 
                products (description, supplier_id) 
            VALUES 
                (?,?);
        `;

        return db.persistMany(sql, products);
    }
};
