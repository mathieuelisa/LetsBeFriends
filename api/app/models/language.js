const CoreModel = require('./coremodel');
<<<<<<< HEAD
const db = require('../database');


class Language extends CoreModel {
    static tableName = 'language';

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }
=======

class Language extends CoreModel {
    static tableName = 'language'

    constructor(obj) {
		super(obj)
		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
>>>>>>> 6742cefbfffef34a551108584a8005fc37700b23
};

module.exports = Language;