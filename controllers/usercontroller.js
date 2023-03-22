const { user,thought } = require('../models');

const User = require('../models/user');

module.exports = {
    //All User
    getuser(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
//Create a new User
    createaNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //Find an user by Id
    getUserbyId(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //Delete the User by ID
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
    //Update the User by ID
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
    },

    //Add a new Friend
    addNewFriend(req,res){
        User.findOneAndUpdate({_id:req.params.userId},
              {$addToSet:{friends:req.params.friendId}
        },
        {
            runValidators:true,
            new:true
        })
        .then((user)=>{
            if(!user){
                return res.status(404).json({
                    message:'No User with ID'
                })
            }
            res.json(user)
        })
    },
    //Delete the Friend by ID
    deleteFriend(req,res){
        User.findOneAndUpdate({_id:req.params.userId},
            {$pull:{friends:{friendId:req.params.friendId}}
      },
      {
          runValidators:true,
          new:true
      })
      .then((user)=>{
          if(!user){
              return res.status(404).json({
                  message:'No User with ID'
              })
          }
          res.json(user)
      })

    }



}