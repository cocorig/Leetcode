# Write your MySQL query statement below
SELECT person_name
FROM Queue
WHERE turn = (
    SELECT MAX(turn)
    FROM (
        SELECT turn, SUM(weight) as total_weight
        FROM Queue t
        WHERE (
            SELECT SUM(weight)
            FROM Queue
            WHERE turn <= t.turn
        ) <= 1000
        GROUP BY turn
    ) AS subquery
    WHERE total_weight <= 1000
);
