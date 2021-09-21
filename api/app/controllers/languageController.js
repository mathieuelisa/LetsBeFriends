const {Language}  = require(`../models`);

const languageController = {

    findAll: async (req, res) => {
        try {
            const languages = await Language.findAll();
            res.status(201).json(languages);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);

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
            const language = await Language.findOneByName(name);
            res.json(language);

        } catch (error) {
            console;log(error);
            res.status(500).json(error)
        }
    },


}

module.exports = languageController;