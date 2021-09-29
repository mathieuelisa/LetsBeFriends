const { string } = require('joi');
const Joi = require('joi');

const newEventSchema = Joi.object({
    id: Joi.number().integer(),
    title: Joi.string().max(80).required(),
    starting_date: Joi.string().required(),
    ending_date: Joi.string().required(),
    img_url: Joi.string().max(1500),
    places_left: Joi.number().min(0).max(6).required(),
    description: Joi.string().max(1800).required(),
    adress : Joi.string().required(),
    user_id: Joi.number().required(),
})

const updateEventSchema = Joi.object({
    id: Joi.number().integer(),
    title: Joi.string().max(80),
    starting_date: Joi.string(),
    ending_date: Joi.string(),
    img_url: Joi.string().max(1500),
    places_left: Joi.number().min(0).max(6),
    description: Joi.string().max(1800),
    adress : Joi.string().required(),
    user_id: Joi.number()
})

module.exports = { newEventSchema, updateEventSchema }