const express = require('express');
const router = express.Router();

const eventController = require('./controllers/eventController');
const languageController = require('./controllers/languageController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');

const { newUserSchema, updateUserSchema } = require('./schemas/user')
const { newEventSchema, updateEventSchema } = require('./schemas/event')
const { validateBody, validateQuery, validateParams } = require('./services/validator')

// --- EVENT

// GET/events/:id
/**
 * Respond with one event from database
 * @route GET / events/{id}
 * @group Event
 * @summary Responds with event from database
 * @param {number} id.path.required The id of the event to fetch
 * @returns {Event.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get('/events/:id', eventController.findOneById)

router.get('/events', eventController.findAll)
router.post('/events', validateBody(newEventSchema), eventController.create)
router.patch('/events', validateBody(updateEventSchema), eventController.update)
router.delete('/events', eventController.delete)


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
router.get('/users', userController.findAll)

router.post('/users', validateBody(newUserSchema), userController.create)
router.patch('/users', validateBody(updateUserSchema), userController.update)

router.delete('/users', userController.delete)
// GET /users/:id

/**
 * Respond with one user from database
 * @route GET / users/{id}
 * @group User
 * @summary Responds with one user from database
 * @param {number} id.path.required The id of the user to fetch
 * @returns {User.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */

router.get('/users/:id', userController.findOneById)


module.exports = router;
