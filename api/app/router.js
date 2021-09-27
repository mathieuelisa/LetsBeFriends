const express = require('express');
const router = express.Router();

const { eventController, languageController, tagController, userController } = require('./controllers/index')

const { newUserSchema, updateUserSchema, updateUserSecuritySchema } = require('./schemas/user')
const { newEventSchema, updateEventSchema } = require('./schemas/event')
const { validateBody, validateQuery, validateParams } = require('./services/validator')

// --- EVENT


/**
 * Respond with one event from database
 * @route GET /events/{id}
 * @group Event
 * @summary Responds with event from database
 * @param {number} id.path.required id
 * @returns {Event.model} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * @returns {string} 500 - An error message
 */
router.get('/events/:id', eventController.findOneById);


router
    .route('/events')
/**
 * Responds with all events in database
 * @route GET /events
 * @group Event
 * @summary Responds with all events in database
 * @returns {Array<Event>} 200 -An array of events
 * @returns {string} 500 - An error message
 */
    .get(eventController.findAll)
/**
 * Add a new form of event
 * @route POST /events
 * @group Event
 * @summary Add a new event in database
 * @param {ReqEventJson.model | Event.model} object.body.required Object containing the properties to insert a event
 * @returns {Event.model} 201 - The newly created event
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 */
    .post(validateBody(newEventSchema), eventController.create)
/**
 * Updade a existing event
 * @route PUT /events
 * @group Event
 * @summary Update a existing event
 * @param {ReqEventJson | Event.model} object.body.required Object containing the properties to update a event
 * @returns {Event.model} 204 - the updating event
 * @returns {string} 500 - an error message
 * @returns {string} 404 - A validation error message
 * 
 */
    .patch(validateBody(updateEventSchema), eventController.update)
/**
 * Delete an existing event
 * @route DELETE /events
 * @group Event
 * @summary Delete a existing event
 * @param {number} id.path.required id necessary for delete event
 * @returns {string} 200 - the event deleted
 * @returns {string} 500 - An error message
 * @returns {string} 404 - A validation error message
 */
    .delete(eventController.delete)

// LANGUAGE
router
    .route('/speak')
    .post(languageController.newUserSpeakLanguage)
    .delete(languageController.deleteUserSpeakLanguage)
router
    .route('/learn')
    .post(languageController.newUserLearnLanguage)
    .delete(languageController.deleteUserLearnLanguage)

// TAG

// --- USER



router
    .route('/users')
    /**
 * Responds with all users in database
 * @route GET /users
 * @group User
 * @summary Responds with all users in database
 * @returns {Array<User>} 200 -An array of users
 * @returns {string} 500 - An error message
 */
    .get(userController.findAll)
    /**
 * Add a new form of user
 * @route POST /users
 * @group User
 * @summary Add a new user in database
 * @param {ReqEventJson.model | Event.model} object.body.required Object containing the properties to insert a user
 * @returns {Event.model} 201 - The newly created user
 * @returns {string} 500 - An error message
 * @returns {string} 400 - A validation error message
 */
    .post(validateBody(newUserSchema), userController.create)
    /**
 * Updade a existing user
 * @route PUT /users
 * @group User
 * @summary Update a existing user
 * @param {ReqEventJson | Event.model} object.body.required Object containing the properties to update a user
 * @returns {Event.model} 204 - the updating user
 * @returns {string} 500 - an error message
 * @returns {string} 404 - A validation error message
 * 
 */
    .patch(validateBody(updateUserSchema), userController.update)
    /**
 * Delete an existing event
 * @route DELETE /users
 * @group User
 * @summary Delete a existing user
 * @param {number} id.path.required id necessary for delete user
 * @returns {string} 200 - the user deleted
 * @returns {string} 500 - An error message
 * @returns {string} 404 - A validation error message
 */
    .delete(userController.delete)

// Ask if email exist, if its does
// Patch the same url with id, password and password confirm 
//(both must be the same, that will be checked by the Joi Schema).
//todo We must put another kind of verification of the get.
//todo SecretQuestion/Answer or a verification by SMS/EMAIL

router
    .route('/resetpassword')
    .get(userController.findOneByEmail)
    .patch(validateBody(updateUserSecuritySchema), userController.update)

router.get('/users/login', userController.login)

// GET /users/:id

/**
 * Respond with one user from database
 * @route GET /users/{id}
 * @group User
 * @summary Responds with one user from database
 * @param {number} id.path.required The id of the user to fetch
 * @param {string}  - email
 * @param {string}  -password user
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
