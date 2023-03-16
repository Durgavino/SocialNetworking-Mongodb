//const { user,thought } = require('../models');
const User= require('../models/user');

module.exports = {
    //All User
    getuser(req,res){
        User.find()
        .then((user)=>res.json(user))
        .catch((err)=>res.status(500).json(err));
    },

createaNewUser(req,res){
    User.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>res.status(500).json(err));
},
getUserbyId(req,res)
{
    User.findOne({_id:req.params.userId})
        .then((user)=>
    !user? res.status(404).json({message:'No user with that ID'})
    :res.json(user)
    )
    .catch((err)=>res.status(500).json(err));
}




}