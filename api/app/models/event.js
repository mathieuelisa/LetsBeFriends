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

	static async save() {
		try {
			if (this.id) {
				await db.query(`UPDATE event SET title=$1, starting_date=$2, ending_date=$3, img_url=$4, places_left=$5, description=$6, longitude=$7, latitude=$8, user_id=$9 WHERE id=$10`, [
					this.title,
					this.starting_date,
					this.ending_date,
					this.img_url,
					this.places_left,
					this.description,
					this.longitude,
					this.latitude,
					this.user_id,
					this.id
				])
			} else {
				const { rows } = await db.query('INSERT INTO event(title, starting_date, ending_date, img_url, places_left, description, longitude, latitude, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id', [
					this.title,
					this.starting_date,
					this.ending_date,
					this.img_url,
					this.places_left,
					this.description,
					this.longitude,
					this.latitude,
					this.user_id
				]);
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
