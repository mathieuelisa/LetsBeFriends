const {Event}  = require(`../models`);

const eventController = {

    findAll: async (req, res) => {
        try {
            const events = await Event.findAll();
            res.status(201).json(events);
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    },

    findOneById: async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10);

        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

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
    
}

module.exports = eventController;