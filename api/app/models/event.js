const CoreModel = require('./coremodel');
const db = require('../database');

class Event extends CoreModel {
	static tableName = 'event';

	constructor(obj) {
		super(obj)
		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}

	async save() {
		try {
			if (this.id) {
				await db.query(`SELECT update_event($1)`, [this])
			} else {
				const { rows } = await db.query('SELECT new_event($1) AS id', [this]);
				this.id = rows[0].id;
				return this
			}

		} catch (error) {
			console.log(error);
			if (error.detail) {
				throw new Error(error.detail)
			} else {
				throw error;
			}
		}
	}
}

module.exports = Event;
