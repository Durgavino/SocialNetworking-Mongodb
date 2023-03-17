const Thought = require('../models/thought');
const user = require('../models/user');
module.exports = {
  
  getAllThought(req, res) {
    Thought.find()
      .then((thoughts) => { res.json(thoughts) })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  CreateaThought(req, res) {
    Thought.create(req.body)
      .then((_id) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thoughts) => !thoughts ? res.status(404)
        .json({ message: 'Thought Created but no user for this ID' })
        : res.json({ message: 'Thought Created' })

      )
      .catch((err) => {
        console.error(err);
      });
  },

postreaction(req,res){
  Thought.findOneAndUpdate({ _id: req.params.thoughtId },{
      $addToSet:{reactions:req.body}
  },
  {
      runValidators:true,
      new:true
  })
      .then((thought) => {
          if (!thought) {
              return res.status(404).json({
                  Message: 'No Thought with that ID'
              })
          }
          res.json(thought)
      })
},


  deletereaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({
            Message: "No Thought with that ID",
          });
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            Message: "No User with that ID",

          });
        }
        res.json({ message: "Reaction is  Deleted" });
      });
  },

  getThoughtById(req, res) {
    Thought.find({_id:req.params.thoughtId})
      .then((thought) =>
        !thought ? res.status(404).json({
          message: 'NoThought with that ID'
        })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));

  },
  updatethought(req,res){
    Thought.findOneAndUpdate({_id:req.params.thoughtId},
      {$set:req.body},
      {
        runValidators:true,
        new:true
      })
      .then((thought)=>{
        if(!thought){
          return res.status(404).json({message:'No Thought with that Id'})
        }
        res.json({message:'Thought is Updated'})
      })
  },
  deletethought(req,res){
    Thought.findOneAndDelete({_id:req.params.thoughtId})
    .then((thought)=>{
      if(!thought){
        return res.status(404).json({message:'No Thought with that ID'})
      }
      res.json({message:'Thought is Deleted'})
    })
  }

}