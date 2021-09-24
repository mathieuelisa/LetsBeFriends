const express = require('express');

const router = express.Router();

const eventController = require('./controllers/eventController');
const languageController = require('./controllers/languageController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');

// EVENT

// GET /events

/**
 * Responds with all events in database
 * @route GET /v1/events
 * @group Event
 * @summary Responds with all events in database
 * @returns {Array<Event>} 200 -An array of events
 * @returns {string} 500 - An error message
 */


router.get('/events', eventController.findAll);

// GET/events/:id

/**
 * Respond with one event from database
 * @route GET /events/{id}
 * @group Event
 * @summary Responds with event from database
 * @returns {Event.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get('/events/:id', eventController.findOneById);


// LANGUAGE

// TAG

// USER

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


// GET /users/:id

/**
 * Respond with one user from database
 * @route GET / users/{id}
 * @group User
 * @summary Responds with one user from database
 * @param {number} id.path.required The id of the user to fetch
 * @param {string} email.query.required - email
 * @param {string} password.query.required -password user
 * @returns {User.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */

router.get('/users/:id', userController.findOneById);

// POST/users/:id

//router.post('/users', userController.create)

//router.patch('/users', userController.update)

//router.delete('/users', userController.delete)


module.exports = router;
