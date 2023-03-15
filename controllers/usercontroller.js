const { user,thought } = require('../models');

module.exports= {
    //All User
    getAllUser(req,res){
        user.find()
        .then((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err));
    }

}