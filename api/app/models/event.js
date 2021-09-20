const CoreModel = require('./coremodel');

class Event extends CoreModel {
	static tableName = 'event';

	constructor(obj) {
		super(obj)
		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
}

module.exports = Event;
