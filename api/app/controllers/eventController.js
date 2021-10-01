const { Event, Language } = require(`../models`);
const adressTranslate = require('../services/positionStack')

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
        console.log('--> Create Event: req.body')
        console.table(req.body)
        
        let data = req.body
        let { eventLanguage } = data
        let adress = data.adress
        // ! changer d'API
        try {
            const coordinates = await adressTranslate(adress)
            data.longitude = coordinates.longitude
            data.latitude = coordinates.latitude
            delete data.adress
            console.log(coordinates)
            if (eventLanguage) delete data.eventLanguage
            //Delete de data eventLanguage avant d'en faire une instance de la classe User

            const event = new Event(data);
            const eventCreated = await event.save();
            
            if(eventLanguage){
                for (let language of eventLanguage) {
                    await Language.newEventHasLanguage(eventCreated.id,language)
                };
            }
            const newEvent = await Event.findOneById(eventCreated.id)

            res.status(201).json(newEvent)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    update: async (req, res, next) => {
        console.log('--> Update Event: req.body')
        console.table(req.body)
        const event = new Event(req.body);
        
        try {
            if(req.body.eventLanguage){
                for (let language of req.body.eventLanguage) {
                    await Language.newEventHasLanguage(event.id,language)
                };
                delete event.eventLanguage
            }

            const result = await event.save();

            if (result){
                const eventResult = await Event.findOneById(event.id)
                res.status(200).json(eventResult)
            } 
            else res.status(400).json("data not valid or ressource do not exist")
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    delete: async (req, res, next) => {
        console.log('--> Delete event: req.body')
        console.table(req.body)
        try {
            const id = req.body.id;
            await Event.delete(id);
            res.status(200).json(`DELETE event with id ${id} : ok`);

        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    search: async (req, res, next) => {
        console.log('--> Search param: req.body')
        console.table(req.body)
        try {
            const events = await Event.findByParameters(req.body)
            res.status(200).json(events)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

}

module.exports = eventController;