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
            const result = await Request.newUserAskEvent(user_id, event_id);
            res.status(201).json({ msg: "Joining request made succesfully", result })
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    confirmJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            await Request.deleteUserAskEvent(user_id, event_id);
            await Request.newUserInEvent(user_id, event_id)
            res.status(200).json(`Request confirmed, relation between user ${user_id} and EventId ${event_id} deleted in db, ${user_id} added to the event`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    refuseJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            await Request.deleteUserAskEvent(user_id, event_id);
            res.status(200).json(`Request refused, relation between user ${user_id} and EventId ${event_id} deleted in db, ${user_id} not added to the event`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
}

module.exports = requestController