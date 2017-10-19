
# Clue 1
SELECT name, region, population FROM country WHERE region='Southern Europe' ORDER BY population;

# Clue 2
SELECT * FROM countrylanguage WHERE countrycode = 'VAT';

# Clue 3
SELECT country.name, lang.language FROM country INNER JOIN countrylanguage AS lang ON lang.countrycode = country.code  WHERE lang.language = 'Italian' AND  lang.percentage = 100;

# Clue 4
SELECT * FROM city WHERE countrycode ='SMR';
(Serravalle/Dogano)

# Clue 5
SELECT * FROM city WHERE name LIKE 'Serra%';

# Clue 6
SELECT captial FROM country WHERE code='BRA'
SELECT name FROM country WHERE id = 211

BRASILIA

#CLUE 7
SELECT name, population FROM city WHERE population = 91084;
Santa Monica
