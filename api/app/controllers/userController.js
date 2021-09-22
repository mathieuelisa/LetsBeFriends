const {User}  = require(`../models`);
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


    findOnebyId : async(req, res, next)=>{
        const id = req.params.id
        try {
            const result = await db.query(
                `SELECT "user".id, "user".firstname, "user".gender, "user".email, "user".description AS bio, "user".age, "user".city, "user".phone_number AS "phoneNumber", "user".img_url AS "imgUrl", "user".created_at AS "createdAt", "user".updated_at AS "updatedAt",
                json_agg(json_build_object(
                'id', event.id,
                'title', event.title,
                'description', event.description,
                'startingDate', event.starting_date,
                'endingDate', event.ending_date,
                'imgUrl', event.img_url,
                'placesLeft', event.places_left,
                'longitude', event.longitude,
                'latitude', event.latitude,
                'ownerId', event.user_id,
                'createdAt', event.created_at,
                'updatedAt', event.updated_at
                )) AS event
                FROM user_participate_event 
                JOIN "user" ON user_participate_event.user_id = "user".id
                JOIN "event" ON user_participate_event.event_id = event.id
                WHERE "user".id = $1
                GROUP BY "user".id`,
            [id], (error, result)=>{
                if (error){
                    console.log(error)
                }else{
                    console.log(result.rows)
                    res.json(result.rows)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }

}




module.exports = userController;