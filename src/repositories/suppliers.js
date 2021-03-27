const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class SuppliersRepository {
    async findAll() {
        const sql = `
            SELECT
                id,
                name,
                country
            FROM
                suppliers
        `;
        const suppliers = await db.select(sql);

        return suppliers;
    }

    async create(suppliers) {
        const sql = `
            INSERT INTO 
                suppliers (name, country) 
            VALUES 
                (?,?);
        `;

        return db.persistMany(sql, suppliers);
    }
};
