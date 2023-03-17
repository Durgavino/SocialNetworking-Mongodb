const router=require('express').Router();

const{
    getAllThought,
    CreateaThought,
    getThoughtById,
postreaction,
deletereaction,
}= require('../../controllers/thoughtcontroller.js');

router.route('/').get(getAllThought).post(CreateaThought);

router.route('/:thoughtId').get(getThoughtById);

// //router.route('/:thoughtId/reactions').post(postreaction).delete(deletereaction);

router.route('/:thoughtId/reactions/:reactionId').post(postreaction).delete(deletereaction);

module.exports=router;
