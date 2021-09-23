const CoreModel = require('./coremodel');
const db = require('../database');
const bcrypt = require('bcrypt');

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
                FULL OUTER JOIN "user" ON user_participate_event.user_id = "user".id
                FULL OUTER JOIN "event" ON user_participate_event.event_id = event.id
                FULL OUTER JOIN user_speak_language ON "user".id = user_speak_language.user_id
                FULL OUTER JOIN (
                    SELECT * FROM "language"
                ) AS speaking_language ON user_speak_language.language_id = speaking_language.id
                FULL OUTER JOIN user_learn_language ON "user".id = user_learn_language.user_id
                FULL OUTER JOIN (
                    SELECT * FROM "language"
                ) as learning_language ON user_learn_language.language_id = learning_language.id
                WHERE "user".id= $1
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
                FULL OUTER JOIN "user" ON user_participate_event.user_id = "user".id
                FULL OUTER JOIN "event" ON user_participate_event.event_id = event.id
                FULL OUTER JOIN user_speak_language ON "user".id = user_speak_language.user_id
                FULL OUTER  JOIN (
                    SELECT * FROM "language"
                ) AS speaking_language ON user_speak_language.language_id = speaking_language.id
                FULL OUTER JOIN user_learn_language ON "user".id = user_learn_language.user_id
                FULL OUTER JOIN (
                    SELECT * FROM "language"
                ) as learning_language ON user_learn_language.language_id = learning_language.id
                GROUP BY "user".id
                LIMIT $1`,
                [limit])
            if (rows.length) {
                return rows.map(row => new User(row))
            }
            return null;
        } catch (error) {
            throw new Error(error.detail)
        }
    }


    async save() {
        try {
            if (this.id) {
                let count = 1;
                const properties = [];
                const values = [this.id];

                for (const key in this){
                    if(key == 'id') continue;
                    properties.push(`"${key}"=$${++count}`)
                    values.push(this[key])
                }
                const { rows } = await db.query(`UPDATE "user" SET ${properties} WHERE id=$1 RETURNING *`, values)
                return new User(rows[0])
            } else {
                this.password = await bcrypt.hash(this.password, 10)
                const { rows } = await db.query('INSERT INTO "user"(firstname, lastname, gender, email, password, description, age, city, phone_number, img_url) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, firstname, lastname, gender, email, description, age, city, phone_number AS "phoneNumber", img_url AS "imgUrl"', [
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
                return new User(rows[0])
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