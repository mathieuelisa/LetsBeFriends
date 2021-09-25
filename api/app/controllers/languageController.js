const { Language } = require(`../models`);

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
            console; log(error);
            res.status(500).json(error)
        }
    },

    newUserSpeakLanguage: async (req, res, next) => {
        const user_id = req.body.userId;
        const language_id = req.body.languageId;

        try {
            const result = await Language.newUserSpeakLanguage(user_id, language_id);
            res.status(201).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    deleteUserSpeakLanguage: async (req, res, next) => {
        const user_id = req.body.userId;
        const language_id = req.body.languageId;

        try {
            const result = await Language.deleteUserSpeakLanguage(user_id, language_id);
            res.status(200).json(`Relation between user ${user_id} and languageId ${language_id} deleted`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}




module.exports = languageController;