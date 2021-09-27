const express = require('express');
const router = express.Router();

const { eventController, languageController, tagController, userController } = require('./controllers/index')

const { newUserSchema, updateUserSchema, updateUserSecuritySchema } = require('./schemas/user')
const { newEventSchema, updateEventSchema } = require('./schemas/event')
const { validateBody, validateQuery, validateParams } = require('./services/validator');
const { User } = require('./models');

// --- EVENT

// GET /events

/**
 * Responds with all events in database
 * @route GET /events
 * @group Events
 * @summary Responds with all events in database
 * @returns {Array<Event>} 200 -An array of events
 * @returns {string} 500 - An error message
 */


router.get('/events', eventController.findAll);

// GET/events/:id

/**
 * Respond with one event from database
 * @route GET /events/{id}
 * @group Events
 * @param {number} id.path.required The id  of the event to fetch
 * @summary Responds with event from database
 * @returns {Event.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */

router.get('/events/:id', eventController.findOneById);


router
    .route('/events')
    .get(eventController.findAll)
    .post(validateBody(newEventSchema), eventController.create)
    .patch(validateBody(updateEventSchema), eventController.update)
    .delete(eventController.delete)

// LANGUAGE

// TAG

// --- USER

// GET / users
/**
 * Responds with all users in database
 * @route GET/users
 * @group User
 * @summary Responds with all users in database
 * @returns {Array<User>} 200 - An array of users
 * @returns {string} 500 - An error message 
 */
router.get('/users', userController.findAll);





router.get('/users/login', userController.login)

// GET /users/:id

/**
 * Respond with one user from database
 * @route GET / users/{id}
 * @group Users
 * @summary Responds with one user from database
 * @param {number} id.path.required The id of the user to fetch
 * @param {string} - email
 * @param {string} -password user
 * @returns {User.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */

router.get('/users/:id', userController.findOneById);

// POST/users/

/**
 * Expected json object in request body
 * @typedef ReqUserJson
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} gender
 * @property {string} email
 * @property {string} password
 * @property {string} description
 * @property {number} age
 * @property {string} city
 * @property {number} phone_number
 */

/**
 * Add a new user in database
 * @route POST / users
 * @group Users
 * @summary Add a new post in database
 * @param {ReqUserJson.model | User.model} object.body.required
 * @returns {User.model} 201 - the newly created user
 * @returns {string} 500 - An errormessage
 * @returns {string} 400 - A validation error message
 */


router.post('/users', userController.create)

// PATCH/users

router.patch('/users', userController.update)

// DELETE/users

router.delete('/users', userController.delete)

router
    .route('/users')
    .get(userController.findAll)
    .post(validateBody(newUserSchema), userController.create)
    .patch(validateBody(updateUserSchema), userController.update)
    .delete(userController.delete)


module.exports = router;
