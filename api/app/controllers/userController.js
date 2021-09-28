const { User } = require(`../models`);
const db = require('../database');

const userController = {
    findAll: async (req, res) => {
        const limit = req.query.limit
        try {
            const users = await User.findAll(limit);
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    findOneById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = await User.findOneById(id);
            if (user) res.status(200).json(user);
            else res.status(404).json("user not found");
        } catch (error) {
            console.log(error);
            res.status(505).json("error");
        }

    },

    findOneByEmail: async (req, res, next) => {
        try {
            const email = req.body.email;
            const user = await User.findOneByEmail(email)
            if (user) {
                res.status(200).json(user)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    login: async (req, res, next) => {
        console.dir(`req.body : ${req.body}`)
        const email = req.body.email
        const password = req.body.password
        try {
            const user = await User.validByEmailPassword(email, password)
            res.status(user.id ? 200 : 401).json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    create: async (req, res, next) => {
        console.dir(`req.body : ${req.body}`)
        const user = new User(req.body);
        if (user.password === user.confirmPassword) {
            try {
                const result = await user.save();
                res.status(201).json(result)
            } catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        } else {
            res.status(400).json(`password and confirmPassword must be the same`)
        }

    },

    update: async (req, res, next) => {
        const user = new User(req.body);
        if (user.confirmPassword) delete user.confirmPassword
        try {
            const result = await user.save();
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
            await User.delete(id);
            res.status(200).json(`DELETE user with id ${id} : ok`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
}




module.exports = userController;