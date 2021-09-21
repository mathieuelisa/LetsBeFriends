const CoreModel = require('./coremodel');
const db = require('../database');


class Language extends CoreModel {
    static tableName = 'language';

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }
};

module.exports = Language;