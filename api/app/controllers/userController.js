const { User } = require(`../models`);
const db = require('../database');

const userController = {
    findAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(201).json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    findOneById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findOneById(id);
            res.json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }

    },


}




module.exports = userController;