const CoreModel = require('./coremodel');
const db = require('../database');

class Request extends CoreModel {
    static tableName = 'request';

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async newUserAskEvent(user_id, event_id) {
        try {
            const { rows } = await db.query('INSERT INTO "user_ask_event"(user_id, event_id) VALUES($1, $2) RETURNING user_id AS "userId", event_id AS "eventId"', [user_id, event_id])

            if (rows[0]) return new Request(rows[0]);
            else return { error: "Couldn't insert data into user_ask_event" };
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    static async deleteUserAskEvent(user_id, event_id) {
        try {
            const { rowCount } = await db.query('DELETE FROM "user_ask_event" WHERE user_id=$1 AND event_id=$2', [user_id, event_id])
            if (rowCount >= 1) return { rowsDeleted: rowCount, user_id, event_id }
            else return { error: "Relation not found" }
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    static async findAllJoiningRequest(event_id) {
        try {
            const { rows } = await db.query('SELECT * FROM "user_ask_event" WHERE event_id=$1', [event_id])

            if (rows) return rows.map(row => new Request(row));
            else return { error: `No request for event ${event_id}` };
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw new Error(error);
            }
        }
    }

    static async newUserInEvent(user_id, event_id) {
        try {
            const { rows } = await db.query('INSERT INTO "user_participate_event"(user_id, event_id) VALUES($1, $2) RETURNING user_id AS "userId", event_id AS "eventId"', [user_id, event_id])
            if (rows[0]) return new Request(rows[0]);
            else return { error: "Couldn't insert data into user_participate_event" };
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    static async findAllJoiningRequestByOwnerID(user_id) {
        try {
            console.log("debut de la requete", user_id)
            const { rows } = await db.query(`SELECT user_ask_event.event_id AS "eventId", json_agg(DISTINCT event.title) AS "title",
            json_agg(
                DISTINCT jsonb_build_object(
                    'id', "user".id,
                    'firstname', "user".firstname,
                    'lastname', "user".lastname,
                    'age', "user".age,
                    'imgUrl', "user".img_url
                )
            ) AS "participants"
            FROM user_ask_event
            LEFT JOIN "event" ON user_ask_event.event_id = event.id
            LEFT JOIN "user" ON user_ask_event.user_id = "user".id
            WHERE event.user_id = $1
            GROUP BY user_ask_event.event_id`
                , [user_id])
            console.log(rows)
            if (rows) return rows.map(row => new Request(row));
            else return { error: `No request for event ${event_id}` };
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }
};

module.exports = Request;