# Write your MySQL query statement below
SELECT person_name
FROM (
    SELECT person_name, turn, weight, 
           SUM(weight) OVER (ORDER BY turn) as total_weight
    FROM Queue
) AS cumulative
WHERE total_weight <= 1000
ORDER BY turn DESC
LIMIT 1;
