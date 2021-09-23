const express = require('express');

const router = express.Router();

const eventController = require('./controllers/eventController');
const languageController = require('./controllers/languageController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');

// EVENT
router.get('/events/:id', eventController.findOneById)

router.get('/events', eventController.findAll)
router.post('/events', eventController.create)
router.patch('/events', eventController.update)
router.delete('/events', eventController.delete)


// LANGUAGE

// TAG

// USER

router.get('/users/:id', userController.findOneById)
router.get('/users', userController.findAll)

router.post('/users', userController.create)
router.patch('/users', userController.update)

router.delete('/users', userController.delete)

module.exports = router;
