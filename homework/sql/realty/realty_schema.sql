
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

CREATE TABLE office (
    id INT,
    office_number INT,
    number_of_floors INT,
    square_feet INT,
    cubicles INT,
    number_bathrooms INT,
    address VARCHAR NOT NULL,
    company_name VARCHAR,
    occupied BOOLEAN,
    price INT
);

CREATE TABLE storefront (
    id INT,
    address VARCHAR,
    occupied_status BOOLEAN,
    price INT,
    kitchen BOOLEAN,
    square_feet INT,
    owner VARCHAR,
    outdoor_seating BOOLEAN DEFAULT false
);

