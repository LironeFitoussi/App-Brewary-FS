UPDATE products
SET price = 0.80
WHERE id=2

UPDATE products
SET stock = 32
WHERE id = 1

UPDATE products
SET stock = 12
WHERE id = 2


-- Multiple Update
UPDATE products
SET stock = 
  CASE 
    WHEN id = 1 THEN 32
    WHEN id = 2 THEN 12
    -- add more WHEN clauses for other product IDs if needed
    ELSE stock -- keep the current stock for other rows
  END