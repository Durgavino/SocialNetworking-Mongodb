//const { user,thought } = require('../models');
const User= require('../models/user');

module.exports = {
    //All User
    getuser(req,res){
        User.find()
        .then((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err));
    }

}