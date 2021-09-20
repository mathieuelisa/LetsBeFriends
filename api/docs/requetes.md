'''sql
SELECT \* FROM "user"
INNER JOIN event ON "user".id = event.user_id
WHERE "user".id = 3;
'''
