const { user,thought } = require('../models');

const User = require('../models/user');

module.exports = {
    //All User
    getuser(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    createaNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    getUserbyId(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteTheUserById(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({
                        Message: 'No User with that ID'
                    })
                }
                res.json({ message: 'User is  Deleted' })
            })



    },
    updateaUserbyId(req,res){
        User.findOneAndUpdate({ _id: req.params.userId },{
            $set:req.body
        },
        {
            runValidators:true,
            new:true
        })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({
                        Message: 'No User with that ID'
                    })
                }
                res.json({ message: 'User is  Updated' })
            })
    }



}