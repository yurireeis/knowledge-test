--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT(100) NOT NULL,
    supplier_id INTEGER NOT NULL,
    CONSTRAINT productSupplier_fk_supplierId FOREIGN KEY (supplier_id)
    REFERENCES suppliers (id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO 
    products (description, supplier_id) 
VALUES 
    ('parafuso', 1);
--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE products;