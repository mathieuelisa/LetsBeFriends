require('dotenv').config();
const { Event } = require('../app/models/index');
const db = require('../app/database.js');

//Test model Event
const testFindAllEvents = async () => {
    const events = await Event.findAll();
    console.log('Test model Event.findAll ==> nb d\'events: ', events.length);
}
testFindAllEvents()

const testFindOneEvent = async (id) => {
    const event = await Event.findOneById(id);
    console.log('test numéro1 model Event.findOne ==> Existe: ', event ? true : false);
}
testFindOneEvent(20)


const testSaveEvent = async () => {
    const event = await Event.save();
}
testSaveEvent();


db.end();




// ! SELECT * FROM "user" JOIN "user_participate_event" ON ("user".id = user_id);

//! SELECT * FROM "user","event" JOIN "user_participate_event" ON ("event".id = event_id);

//! SELECT "user".firstname , language.name FROM "user","language" JOIN "user_learn_language" ON ("language".id = language_id);