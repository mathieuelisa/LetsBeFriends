const db = require('../database');

class CoreModel {
	#id;

	constructor(obj) {
		this.#id = obj.id;
	}

	get id() {
		return this.#id;
	}

	set id(id) {
		if (typeof id !== 'number') throw Error('id doit être un nombre !');
		this.#id = id;
	}

	static async findAll() {
		try {
			const { rows } = await db.query(`SELECT * FROM "${this.tableName}"`);
			return rows.map((row) => new this(row));
		} catch (error) {
			console.log(error);
		}
	}

	static async findOneById(id) {
		try {
			const { rows } = await db.query(`SELECT * FROM "${this.tableName}" WHERE id=$1`, [id]);
			if (rows[0]) {
				return new this(rows[0])
			}
		} catch (error) {
			console.log(error);
		}
	}

	static async delete(id) {
		const tableName = this.constructor.tableName;
		//Allow to delete the actual instance of the model or to target one specify id
		const idToUse = id ? id : this.id;
		try {
			await db.query(`DELETE FROM "${tableName}" WHERE id=$1`, [idToUse])
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = CoreModel