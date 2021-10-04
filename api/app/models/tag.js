const CoreModel = require('./coremodel');
const db = require('../database');

/**
 * An entity representing a table Tag
 * @typedef Tag
 * @property {number} id
 * @property {string} name
 * @property {string} color
 * @property {Date} created_at
 * @property {Date} updated_at
 */


/**
 * A model representing a class Tag
 * @class Tag
 */
class Tag extends CoreModel {
    static tableName = 'tag';
    /**
     * The Tag constructor
     * @param {object} obj a literal object with properties copied into the instance
     */

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {

            const { rows } = await db.query('SELECT * FROM tag')
            return rows.map(row => new Tag(row))

        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    static async deleteEventHasTag(event_id, language_id) {
        try {
            const { rowCount } = await db.query('DELETE FROM "event_has_tag" WHERE event_id=$1 AND language_id=$2', [event_id, language_id])

            if (rowCount >= 1) return { rowsDeleted: rowCount, event_id, language_id }
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



};

module.exports = Tag;