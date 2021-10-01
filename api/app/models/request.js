const CoreModel = require('./coremodel');
const db = require('../database');
/**
 * A entity represent a request
 * @typedef Request
 */

/**
 * A model representing a class request
 */
class Request extends CoreModel {
    static tableName = 'request';
    /**
     * The request constructor
     * @param {object} obj a literal object
     */
    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }
    /**
     * Fetches an user
     * @param {number} user_id.path.required user_id
     * @param {number} event_id.path.required event_id
     * @returns {Request|null} null if not user or not event
     * @async
     * @static
     */
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
    /**
     * Delete an user who ask an event
     * @param {number} user_id.path.required user_id
     * @param {number} event_id event_id 
     * @static
     * @async
     */

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
    /**
     * Fetches all users who joining event
     * @param {number} user_id.path.required user_id
     * @param {number} event_id.path.required event_id
     * @returns {Request|null} null if not user or not event
     * @async
     * @static
     */
    static async findAllJoiningRequest(event_id) {
        try {
            const { rows } = await db.query('SELECT * FROM "user_ask_event" WHERE event_id=$1', [event_id])
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
    /**
     * Add an user in a event
     * @param {number} user_id.path.required user_id
     * @param {number} event_id.path.required event_id
     * @returns {Request|null} null if not user or not event find
     * @async
     * @static
     */

    static async newUserInEvent(user_id, event_id) {
        try {
            const { rows } = await db.query('INSERT INTO "user_participate_event"(user_id, event_id) VALUES($1, $2) RETURNING user_id AS "userId", event_id AS "eventId"', [user_id, event_id])
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


};

module.exports = Request;