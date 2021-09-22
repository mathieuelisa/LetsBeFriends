const CoreModel = require('./coremodel');
const db = require('../database');

/**
 * An entity representing a table Tag
 * @typedef Tag
 * @property {number} id
 * @property {string} name
 * @property {string} color
 * @property {timestamptz} created_at
 * @property {timestamptz} updated_at
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




};

module.exports = Tag;