const router=require('express').Router();

const{
    getAllThought,
    CreateaThought,
    getThoughtById,
    updatethought,
    deletethought,
postreaction,
deletereaction,
}= require('../../controllers/thoughtcontroller.js');

router.route('/').get(getAllThought).post(CreateaThought);

router.route('/:thoughtId').get(getThoughtById).put(updatethought).delete(deletethought);

router.route('/:thoughtId/reactions').post(postreaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deletereaction);
// router.route('/:thoughtId/reactions/:reactionId').post(postreaction).delete(deletereaction);

module.exports=router;
