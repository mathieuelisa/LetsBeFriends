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
            return new Request(rows[0])
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
            const { rows } = await db.query('DELETE FROM "user_ask_event" WHERE user_id=$1 AND event_id=$2', [user_id, event_id])
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
            const { rows } = await db.query('SELECT * FROM "user_ask_event" WHERE event_id=$1', event_id)
            if (rows) {
                return rows.map(row => new Request(row))
            }
            return null
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw new Error(error);
            }
        }
    }


};

module.exports = Request;