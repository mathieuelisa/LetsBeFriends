const { User } = require(`../models`);

const userController = {
    findAll: async (req,res) => {
        const limit = req.query.limit
        try{
            const users = await User.findAll(limit);
            res.status(201).json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    findOneById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findOneByid(id);
            console.log(user)
            res.json(user)
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
        
    },




}




module.exports = userController;