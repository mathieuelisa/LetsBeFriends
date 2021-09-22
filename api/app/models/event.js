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
				FULL OUTER JOIN user_participate_event ON event.id = user_participate_event.event_id
				FULL OUTER JOIN "user" ON user_participate_event.user_id = "user".id
				FULL OUTER JOIN "event_has_tag" ON event.id = event_has_tag.event_id
				FULL OUTER JOIN "tag" ON event_has_tag.tag_id = tag.id
				FULL OUTER JOIN "event_has_language" ON event.id = event_has_language.event_id
				FULL OUTER JOIN "language" ON event_has_language.language_id = language.id
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
