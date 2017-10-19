
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


