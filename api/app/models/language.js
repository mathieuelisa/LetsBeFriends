const CoreModel = require('./coremodel');
const db = require('../database');

/**
 * An entity representing a table language
 * @typedef Language
 * @property {number} id
 * @property {string} name
 * @property {string} img_url
 * @property {Date} created_at
 * @property {Date} updated_at
*/


/**
 * a model representing a class language
 * @class Language
 */

class Language extends CoreModel {
    static tableName = 'language';
    /**
     * The Language constructor
     * @param {Object} obj a literal object with properties copied into the instance 
     */

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }
};

module.exports = Language;