 INSERT INTO celebs (id, name, age)
 VALUES (1, 'Justin Bieber', 22);
 INSERT INTO celebs (id, name, age)
 VALUES (2, 'Beyonce Knowles', 33);
 INSERT INTO celebs (id, name, age)
 VALUES (3, 'Jeremy Lin', 26);
 INSERT INTO celebs (id, name, age)
 VALUES (4, 'Taylor Swift', 26);
 

 -------------------------------------


 ALTER TABLE celebs
 ADD COLUMN twitter_handle TEXT;

 SELECT * FROM celebs;


 ----------------------------------------
 UPDATE celebs
 SET twitter_handle = '@taylorswift13'
 WHERE id = '4';


 SELECT * FROM celebs;
----------------------------------------

 DELETE FROM celebs
 WHERE twitter_handle IS NULL;

 SELECT * FROM celebs;

 ----------------------------------------

 CREATE TABLE awards (
   id INTEGER PRIMARY KEY,
   recipient TEXT NOT NULL,
   award_name TEXT DEFAULT 'Grammy'
 );

----------------------------------------
SELECT imdb_rating AS "IMDb"
FROM movies;

----------------------------------------
SELECT DISTINCT year
FROM movies;

-------------------------------------------

SELECT *
FROM movies
WHERE year > 2014;

--------------------------------------------
SELECT *
FROM movies
WHERE name LIKE 'se_en';

-------------------------------------------

SELECT *
FROM movies
WHERE name LIKE 'The %';

-------------------------------------------------
SELECT name
FROM movies
WHERE imdb_rating IS NULL

-------------------------------------------------
SELECT *
FROM movies
WHERE year BETWEEN '1970' AND '1979';

------------------------------------------------

SELECT *
FROM movies
WHERE year < 1985
   AND genre = 'horror';

-------------------------------------------------
SELECT *
FROM movies
WHERE genre = 'romance'
  OR genre = 'comedy';

-------------------------------------------------
SELECT name, year, imdb_rating
FROM movies
ORDER BY imdb_rating DESC;


---------------------------------------------------
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;

------------------------------------------------------------

SELECT name,
 CASE
 WHEN genre = 'romance' THEN 'Chill'
 WHEN genre = 'comedy' THEN 'Chill'
 ELSE 'Intense'
 END AS 'Mood'
 FROM movies;

 ------------------------------------------------------
 
SELECT COUNT(*)
FROM fake_apps
WHERE price = 0.0;

--------------------------------------------------------


