1. SELECT AVG (square_feet) FROM office;
2. SELECT COUNT (number) FROM apartment;
3. SELECT * FROM apartment WHERE tenant = null;
4. SELECT company_name FROM office;
5. The number of cubicles and bathrooms in the 3rd office 
    Not sure how to answer this question. Techinically there is no guarenteed order for your data to be returned without 
    a ORDER BY clause.  And with an ORDER BY clause we would need to know which office would be 3rd A faux statement
    for this  would be 
    SELECT bathrooms, cubicles FROM office WHERE something = something

6. SELECT * FROM storefront WHERE kitchen = true;
7. SELECT MAX(price) FROM storefront WHERE outdoor_seating = true;
8. SELECT MIN(cubicles) FROM office; 
9. SELECT MAX(number_bathrooms) FROM office;
   SELECT MAX(cubicles) FROM office; 
