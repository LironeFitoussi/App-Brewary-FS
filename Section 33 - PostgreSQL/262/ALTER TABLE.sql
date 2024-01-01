ALTER TABLE <TABLE TO CHANGE>
    <DO SOMETHING>

-- Rename Column
ALTER TABLE student
    RENAME TO user;

-- Edit Column
ALTER TABLE user
        ALTER COLUMN first_name TYPE VARCHAR(20)

-- Add Column
ALTER TABLE contact_detail
    ADD email TEXT

CREATE TABLE example (
    a integer,
    b integer,
    c integer,
    UNIQUE (a,c)
);

ALTER TABLE visited_countries
    ADD UNIQUE(user_id, country_code)

INSERT INTO visited_countries (user_id, country_code)
VALUES (1 , 'FR')

DROP TABLE <NAME OF TABLE>

-- Update Data
UPDATE <TABLE TO UPDATE>
SET <COLUMN TO UPDATE> = value, ...
WHERE <SOME CONDITION>;

UPDATE users
SET name = 'Angelina'
WHERE id = 1;