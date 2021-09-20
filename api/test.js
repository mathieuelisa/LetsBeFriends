require('dotenv').config();
const { Event } = require('./app/models/index');
const db = require('./app/database.js');

const testFindAllEvents = async () => {
    const events = await Event.findAll();
    console.log('Test model Event.findAll ==> nb d\'events: ', events.length);
}
testFindAllEvents() //? fonctionne

const testFindOneEvent = async (id) => {
    const event = await Event.findOne(id);
    console.log('Test model Event.findOne ==> Existe: ', event ? true : false);
}
testFindOneEvent(20) //? 

db.end();


// db.query('SELECT * FROM "user" LEFT OUTER JOIN event AS "event" ON "user".id = event.user_id', (error, result) => {
//     if (error) console.log(error);
//     else console.log(result.rows);
// });

// 'SELECT * FROM "user" LEFT OUTER JOIN event ON "user".id = event_id '

// SELECT * FROM "user"
// LEFT OUTER JOIN "faction"
// AS "faction"
// ON "User".
// "faction_id" = "faction".
// "id"
// LEFT OUTER JOIN "role"
// AS "role"
// ON "User".
// "role_id" = "role".
// "id"
// LEFT OUTER JOIN "whitelist"
// AS "whitelistRequest"
// ON "User".
// "id" = "whitelistRequest".
// "user_id";

// ! SELECT * FROM "user" JOIN "user_participate_event" ON ("user".id = user_id);

//! SELECT * FROM "user","event" JOIN "user_participate_event" ON ("event".id = event_id);

//! SELECT "user".firstname , language.name FROM "user","language" JOIN "user_learn_language" ON ("language".id = language_id);