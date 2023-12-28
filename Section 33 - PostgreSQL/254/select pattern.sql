-- Strats with U an fill pattern
SELECT country
FROM world_food
WHERE country LIKE 'U' || '%';

--  fill pattern and end with a
SELECT country
FROM world_food
WHERE country LIKE  '%' || 'a';

-- Shorten Syntax
SELECT country
FROM world_food
WHERE country LIKE  '%a';