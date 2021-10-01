const Request = require('../models/request');

const requestController = {

    findAllJoiningRequest: async (req, res, next) => {
        const event_id = req.params.id
        try {
            const result = await Request.findAllJoiningRequest(event_id);
            res.status(result.error ? 418 : 200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    makeJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            const result = await Request.newUserAskEvent(user_id, event_id);
            res.status(result.error ? 418 : 200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    confirmJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            const { rowCount } = await Request.deleteUserAskEvent(user_id, event_id);
            const result = await Request.newUserInEvent(user_id, event_id)
            res.status(result.error ? 418 : 200).json({ rowCount, result });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    refuseJoiningRequest: async (req, res, next) => {
        const user_id = req.body.userId;
        const event_id = req.body.eventId;

        try {
            const result = await Request.deleteUserAskEvent(user_id, event_id);
            res.status(result.error ? 418 : 200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
}

module.exports = requestController