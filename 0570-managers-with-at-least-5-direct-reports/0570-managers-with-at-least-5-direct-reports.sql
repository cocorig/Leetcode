# Write your MySQL query statement below
SELECT manager.name
FROM Employee AS manager
JOIN Employee AS employee ON manager.id = employee.managerId
GROUP BY manager.id, manager.name
HAVING COUNT(employee.id) >= 5;
