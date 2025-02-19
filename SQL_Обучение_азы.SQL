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
SELECT SUM(downloads)
FROM fake_apps;
-------------------------------------------------------
SELECT MAX(price)
FROM fake_apps;
-------------------------------------------------------
SELECT AVG(price)
FROM fake_apps;

------------------
SELECT name, ROUND(price, 0)
FROM fake_apps;

-----------------------------
SELECT ROUND(AVG(price), 2)
FROM fake_apps;
-------------------------------
SELECT price, COUNT(*)
FROM fake_apps
WHERE downloads > 20000
GROUP BY price;
--------------------------------
SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;

--------------------------------------

SELECT category,
  price,
  AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;

--------------------------------------
SELECT price,
  ROUND(AVG(downloads)),
  COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(name) > 10;

----------------------------------------

SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id;

SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE description = 'Fashion Magazine';
---------------------------------------------------------------

SELECT COUNT(*)
FROM newspaper;

SELECT COUNT(*)
FROM online;

SELECT COUNT(*)
FROM newspaper
JOIN online
  ON newspaper.id = online.id;

  ---------------------------------------------------------------
  SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = online.id;

SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = online.id
WHERE online.id IS NULL;

--------------------------------------------------------------
SELECT mod (number1, number2) FROM decimals

--------------------------------------------------------------
SELECT *
FROM classes
JOIN students
  ON classes.id = students.class_id;
------------------------------------------------------------

SELECT COUNT(*)
FROM newspaper
WHERE start_month <= 3 
  AND end_month >= 3;

SELECT *
FROM newspaper
CROSS JOIN months;

SELECT *
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month;

SELECT month, COUNT(*)
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month
GROUP BY month;

-------------------------------------------------------
SELECT *
FROM newspaper
UNION
SELECT *
FROM online;

---------------------------------------------------------
WITH previous_query AS (
SELECT customer_id,
   COUNT(subscription_id) AS 'subscriptions'
FROM orders
GROUP BY customer_id
)

SELECT customers.customer_name, 
   previous_query.subscriptions
FROM previous_query
JOIN customers
  ON previous_query.customer_id = customers.customer_id;
  ------------------------------------------------------
  



