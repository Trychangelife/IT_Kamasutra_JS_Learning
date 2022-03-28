SELECT 
 CASE
 WHEN number = 0 THEN 0
 ELSE number*-1
 END as res
 FROM opposite;