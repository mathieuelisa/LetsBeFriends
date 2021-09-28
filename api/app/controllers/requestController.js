const Request = require('../models/request');

const requestController = {

    findAllJoiningRequest: async (req, res, next) => {
        const event_id = req.body.eventId

        try {
            const requests = await Request.findAllJoiningRequest(event_id);
            res.status(200).json(requests)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    makeJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            const result = await Request.newUserAskRequest(user_id, event_id);
            res.status(201).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    confirmJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            const result = await Request.deleteUserAskEvent(user_id, event_id);
            res.status(200).json(`Relation between user ${user_id} and EventId ${event_id} deleted`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
}

module.exports = requestController