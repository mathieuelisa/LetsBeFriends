const { User } = require(`../models`);
const db = require('../database');

const userController = {
    findAll: async (req, res) => {
        const limit = req.query.limit
        try {
            const users = await User.findAll(limit);
            res.status(201).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    findOneById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = await User.findOneById(id);
            res.json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
        
    },

    create : async(req, res, next) =>{
        const user = new User(req.body);
        if(user.password === user.confirmPassword){
            try {
                const result = await user.save();
                res.status(201).json(result)
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        }else{
            res.status(400).json(`password and confirmPassword must be the same`)
        }

    },

    update : async(req, res, next)=>{
    const user = new User(req.body);
        try {
            const result = await user.save();
            res.status(201).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    delete : async(req, res, next)=>{
        try {
            const id = req.body.id;
            console.log(id)
            await User.delete(id);
            res.status(200).json(`DELETE user with id ${id} : ok`);
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}




module.exports = userController;