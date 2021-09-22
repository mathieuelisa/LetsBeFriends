const CoreModel = require('./coremodel');
const db = require('../database');

class User extends CoreModel {
    static tableName = 'user';

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }





    static async findOneById(id) {
        try {
            const { rows } = await db.query(
                `SELECT "user".id, "user".firstname, "user".gender, "user".email, "user".description AS bio, "user".age, "user".city, "user".phone_number AS "phoneNumber", "user".img_url AS "imgUrl", "user".created_at AS "createdAt", "user".updated_at AS "updatedAt",
                json_agg(
					DISTINCT jsonb_build_object(
						'id', speaking_language.id,
						'name', speaking_language.name
					)
				) AS "speakingLanguage",
                json_agg(
					DISTINCT jsonb_build_object(
						'id', learning_language.id,
						'name', learning_language.name
					)
				) AS "learningLanguage", 
                json_agg(
                    jsonb_build_object(
                        'id', event.id,
                        'title', event.title,
                        'description', event.description,
                        'startingDate', event.starting_date,
                        'endingDate', event.ending_date,
                        'imgUrl', event.img_url,
                        'placesLeft', event.places_left,
                        'longitude', event.longitude,
                        'latitude', event.latitude,
                        'ownerId', event.user_id,
                        'createdAt', event.created_at,
                        'updatedAt', event.updated_at
                    )
                ) AS event         
                FROM user_participate_event 
                JOIN "user" ON user_participate_event.user_id = "user".id
                JOIN "event" ON user_participate_event.event_id = event.id
                JOIN user_speak_language ON "user".id = user_speak_language.user_id
                INNER JOIN (
                    SELECT * FROM "language"
                ) AS speaking_language ON user_speak_language.language_id = speaking_language.id
                JOIN user_learn_language ON "user".id = user_learn_language.user_id
                JOIN (
                    SELECT * FROM "language"
                ) as learning_language ON user_learn_language.language_id = learning_language.id
                WHERE "user".id = $1
                GROUP BY "user".id`,
                [id]);
            if (rows[0]) {
                return new User(rows[0]);
            }
            return null;
        } catch (error) {
            throw new Error(error.detail)
        }
    }

    static async findAll(limit) {
        try {
            const result = await db.query(
                `SELECT "user".id, "user".firstname, "user".gender, "user".email, "user".description AS bio, "user".age, "user".city, "user".phone_number AS "phoneNumber", "user".img_url AS "imgUrl", "user".created_at AS "createdAt", "user".updated_at AS "updatedAt",
                json_agg(
					DISTINCT jsonb_build_object(
						'id', speaking_language.id,
						'name', speaking_language.name
					)
				) AS "speakingLanguage",
                json_agg(
					DISTINCT jsonb_build_object(
						'id', learning_language.id,
						'name', learning_language.name
					)
				) AS "learningLanguage", 
                json_agg(
                    jsonb_build_object(
                        'id', event.id,
                        'title', event.title,
                        'description', event.description,
                        'startingDate', event.starting_date,
                        'endingDate', event.ending_date,
                        'imgUrl', event.img_url,
                        'placesLeft', event.places_left,
                        'longitude', event.longitude,
                        'latitude', event.latitude,
                        'ownerId', event.user_id,
                        'createdAt', event.created_at,
                        'updatedAt', event.updated_at
                    )
                ) AS event         
                FROM user_participate_event 
                JOIN "user" ON user_participate_event.user_id = "user".id
                JOIN "event" ON user_participate_event.event_id = event.id
                JOIN user_speak_language ON "user".id = user_speak_language.user_id
                INNER JOIN (
                    SELECT * FROM "language"
                ) AS speaking_language ON user_speak_language.language_id = speaking_language.id
                JOIN user_learn_language ON "user".id = user_learn_language.user_id
                JOIN (
                    SELECT * FROM "language"
                ) as learning_language ON user_learn_language.language_id = learning_language.id
                GROUP BY "user".id
                LIMIT $1`,
                [limit], (error, result) => {
                    if (error) {
                        throw new Error(error.detail)
                    } else {
                        return result.rows
                    }
                })
        } catch (error) {
            throw new Error(error.detail)
        }
    }


    static async save() {
        try {
            if (this.id) {
                await db.query(`UPDATE event SET firstname=$1, lastname=$2, gender=$3, email=$4, password=$5, description=$6, age=$7, city=$8, phone_number=$9, img_url=$10 WHERE id=$11`, [
                    this.firstname,
                    this.lastname,
                    this.gender,
                    this.email,
                    this.password,
                    this.description,
                    this.age,
                    this.city,
                    this.phone_number,
                    this.img_url,
                    this.id
                ])
            } else {
                const { rows } = await db.query('INSERT INTO event(firstname, lastname, gender, email, password, description, age, city, phone_number, img_url) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id', [
                    this.firstname,
                    this.lastname,
                    this.gender,
                    this.email,
                    this.password,
                    this.description,
                    this.age,
                    this.city,
                    this.phone_number,
                    this.img_url
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
};


module.exports = User;