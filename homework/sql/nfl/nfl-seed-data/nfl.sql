1. SELECT name FROM teams;
2. SELECT stadium, head_coach  FROM teams WHERE conference = 'NFC';
3. SELECT head_coach  FROM teams WHERE conference = 'AFC' AND division = 'South';
4. SELECT COUNT (name) FROM players;

5. SELECT name, head_coach FROM teams WHERE conference = 'AFC' AND division = 'East' OR conference = 'NFC' AND division = 'North';
6. SELECT name, salary FROM players ORDER BY salary DESC LIMIT 50;
7. SELECT AVG (salary) FROM players;
8. SELECT name, salary FROM players WHERE salary > 10000000;

9. SELECT name, salary FROM players ORDER BY salary DESC LIMIT 1;
10. SELECT name, position FROM players ORDER BY salary LIMIT 100;
11. SELECT AVG (salary) FROM players WHERE position = 'DE';
12. SELECT players.name FROM teams INNER JOIN players ON players.team_id = teams.id WHERE teams.name = 'Buffalo Bills';
13. SELECT SUM (players.salary) FROM teams INNER JOIN players ON players.team_id = teams.id WHERE teams.name = 'New York Giants';
14. SELECT players.name  FROM teams INNER JOIN players ON players.team_id = teams.id WHERE teams.name = 'Green Bay Packers' ORDER BY players.salary LIMIT 1;




SELECT 
FROM 
WHERE
GROUP BY 
HAVING
ORDER BY



READS LIKE 


FROM 
WHERE
GROUP BY
HAVING
SELECT
ORDER BY


If anyone wants to know how a full SELECT statement works, reads, 
and what and alias is, when we break for lunch I can show you a brief run down of all that.  
It makes SQL much easier if you understand how the SELECT statement reads.