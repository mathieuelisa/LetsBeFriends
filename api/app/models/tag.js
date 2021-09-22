const CoreModel = require('./coremodel');
const db = require('../database');

class Tag extends CoreModel {
    static tableName = 'tag';

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }




};

module.exports = Tag;