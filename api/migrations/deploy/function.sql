-- Deploy lbf:function to pg

BEGIN;

-- XXX Add DDLs here.
-- CREATE FUNCTION new_event(TEXT, TIMESTAMPTZ, TIMESTAMPTZ, TEXT, places_left_domain, TEXT, longitude_domain, latitude_domain, INT) RETURNS INT AS $$
--     INSERT INTO event(title, starting_date, ending_date, img_url, places_left, description, longitude, latitude, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;
-- $$ LANGUAGE SQL STRICT;

-- CREATE FUNCTION update_event(TEXT, TIMESTAMPTZ, TIMESTAMPTZ, TEXT, places_left_domain, TEXT, longitude_domain, latitude_domain, INT, INT) RETURNS void AS $$
--     UPDATE event SET title=$1, starting_date=$2, ending_date=$3, img_url=$4, places_left=$5, description=$6, longitude=$7, latitude=$8, user_id=$9 WHERE "id"=$10;
-- $$ LANGUAGE SQL STRICT;

COMMIT;
