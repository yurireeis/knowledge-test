--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT(50) NOT NULL,
    country TEXT(50) NOT NULL
);

INSERT INTO 
    suppliers (name, country) 
VALUES 
    ('VAEES', 'brasil');
--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE suppliers;