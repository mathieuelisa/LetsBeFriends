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
    /**
     * Add a new user who speak a language
     * @param {number} user_id.path.required user_id
     * @param {number} language_id.path.required language_id
     * @returns {Array<Language>}
     * @async
     * @static
     */

    static async newUserSpeakLanguage(user_id, language_id) {
        try {
            const { rows } = await db.query('INSERT INTO "user_speak_language"(user_id, language_id) VALUES($1, $2) RETURNING user_id AS "userId", language_id AS "languageId"', [user_id, language_id])
            return new Language(rows[0])
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
     * Delete a user who speak a language
     * @param {number} user_id.path.required user_id
     * @param {number} language_id.path.required language_id
     * @returns {string}
     * @static
     * @async
     */

    static async deleteUserSpeakLanguage(user_id, language_id) {
        try {
            await db.query('DELETE FROM "user_speak_language" WHERE user_id=$1 AND language_id=$2', [user_id, language_id])
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
     * Add a new user who want learn a new language
     * @param {number} user_id.path.required user_id
     * @param {number} language_id.path.required language_id
     * @returns {Array<Language>}
     * @async
     * @static
     */
    static async newUserLearnLanguage(user_id, language_id) {
        try {
            const { rows } = await db.query('INSERT INTO "user_learn_language"(user_id, language_id) VALUES($1, $2) RETURNING user_id AS "userId", language_id AS "languageId"', [user_id, language_id])
            return new Language(rows[0])
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
     * Delete a user who  learn a language
     * @param {number} user_id.path.required user_id
     * @param {number} language_id.path.required language_id
     * @returns {string}
     * @async
     * @static
     */

    static async deleteUserLearnLanguage(user_id, language_id) {
        try {
            await db.query('DELETE FROM "user_learn_language" WHERE user_id=$1 AND language_id=$2', [user_id, language_id])
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

module.exports = Language;