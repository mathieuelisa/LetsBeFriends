const CoreModel = require('./coremodel');
const db = require('../database');

/**
 * A entity representing a table event
 * @typedef Event
 * @property {number} id
 * @property {string} title
 * @property {string} img_url
 * @property {number} places_left
 * @property {string} description
 * @property {Date} starting_date
 * @property {Date} ending_date
 * @property {number} x.required longitude
 * @property {number} y.required latitude
 * @property {Date} created_at
 * @property {Date} updated_at
 */

/**
 * a model representing a class Event
 * @class Event
 */

class Event extends CoreModel {
	static tableName = 'event';
/**
 * The Event constructor
 * @param {object} obj  a literal object with properties copied into the instance 
 */
	constructor(obj) {
		super(obj)
		for (const propName in obj) {
			this[propName] = obj[propName];
		}
	}
	
	/**
	 * fetches a single id from the database
	 * @param {number} id id of the event we're looking for
	 * @returns {Event|null} null if no event matches the given in database
	 * @async
	 * @static
	 */

	static async findOneById(id) {
		try {
			const { rows } = await db.query(
				`SELECT event.id, event.title, event.description, event.starting_date AS "startingDate", event.ending_date AS "endingDate", 
				event.img_url AS "imgUrl",  event.places_left AS "placesLeft", event.longitude, event.latitude, event.user_id AS "ownerId",
				event.created_at AS "createdAt", event.updated_at AS "updatedAt",
				json_agg(
					DISTINCT jsonb_build_object(
						'id', language.id,
						'name', language.name
					)
				) AS languages,
				json_agg(
					DISTINCT jsonb_build_object(
						'name', tag.name,
						'color', tag.color
					)
				) AS tags,
				json_agg(
					DISTINCT jsonb_build_object(
						'id', "user".id,
						'firstname', "user".firstname,
						'lastname', "user".lastname,
						'gender', "user".gender,
						'email', "user".email,
						'bio', "user".description,
						'age', "user".age,
						'city', "user".city,
						'phoneNumber', "user".phone_number,
						'imgUrl', "user".img_url,
						'createdAt', "user".created_at,
						'updatedAt', "user".updated_at
					)
				) AS participants
				FROM event
				JOIN user_participate_event ON event.id = user_participate_event.event_id
				JOIN "user" ON user_participate_event.user_id = "user".id
				JOIN "event_has_tag" ON event.id = event_has_tag.event_id
				JOIN "tag" ON event_has_tag.tag_id = tag.id
				JOIN "event_has_language" ON event.id = event_has_language.event_id
				JOIN "language" ON event_has_language.language_id = language.id
				WHERE event.id = $1
				GROUP BY event.id`,
				[id]);
			if (rows[0]) {
				return new Event(rows[0]);
			}
			return null;
		} catch (error) {
			console.log(error)
			throw new Error(error.detail)
		}
	}
	
	/**
	 * add a post to the database
	 */

 	  async save() {
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
