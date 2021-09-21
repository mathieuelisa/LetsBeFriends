<<<<<<< HEAD
const CoreModel = require('./coremodel');
const db = require('../database');
=======


class User {
>>>>>>> 6742cefbfffef34a551108584a8005fc37700b23

class User extends CoreModel {
    static tableName = 'user';

    constructor(obj) {
        super(obj)
        for (const propName in obj) {
            this[propName] = obj[propName];
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