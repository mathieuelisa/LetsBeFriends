const { User } = require(`../models`);
const db = require('../database');

const userController = {
    findAll: async (req,res) => {
        try{
            const users = await User.findAll();
            res.status(201).json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    findOneByName: async (req, res) => {
        try {
            const name = req.params.name;
            const user = await User.findOneByName(name);
            res.json(user)
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
        
    },




}




module.exports = userController;