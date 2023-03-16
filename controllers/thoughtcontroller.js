const Thought = require('../models/thought');

module.exports = {
    getAllThought(req, res) {
        Thought.find()
        .populate({path:'reactions',select:'-__v'})
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    CreateaThought(req, res) {
        Thought.create(req.body)
            .then((_id) => {
                return Thought.findOneAndUpdate(
                    { _id: req.body.userID },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((thought) => !thought ? res.status(404)
                .json({ message: 'Thought Created' })
                : res.json({ message: 'Thought Created' })

            )
            .catch((err) => {
                console.error(err);
            });
    }








}