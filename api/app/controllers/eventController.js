const { Event } = require(`../models`);

const eventController = {

    findAll: async (req, res) => {
        const limit = req.query.limit;
        try {
            const events = await Event.findAll(limit);
            res.status(200).json(events);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    findOneById: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);
            const event = await Event.findOneById(id);
            if (event) res.status(200).json(event);
            else res.status(404).json("event not found")
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    //! NON FAIT
    findOneByName: async (req, res) => {
        try {
            const name = req.params.name;
            const event = await Event.findOneByName(name);
            res.json(event)

        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }

    },

    create: async (req, res, next) => {
        const event = new Event(req.body);
        try {
            const result = await event.save();
            res.status(201).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    update: async (req, res, next) => {
        const event = new Event(req.body);
        try {
            const result = await event.save();
            if (result) res.status(200).json(result)
            else res.status(400).json("data not valid or ressource do not exist")
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const id = req.body.id;
            await Event.delete(id);
            res.status(200).json(`DELETE event with id ${id} : ok`);

        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

}

module.exports = eventController;