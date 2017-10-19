
CREATE TABLE apartment (
number INT UNIQUE PRIMARY KEY,
apartment_number INT,
number_of_bedrooms INT,
number_of_bathrooms INT,
address VARCHAR NOT NULL,
tenant VARCHAR,
occupied BOOLEAN,
square_footage INT,
price INT);

