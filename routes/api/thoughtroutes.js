const router=require('express').Router();

const{
    getAllThought,
    CreateaThought,
postreaction,
deletereaction,
}= require('../../controllers/thoughtcontroller.js');

router.route('/').get(getAllThought).post(CreateaThought);

router.route('/:thoughtId/reactions').post(postreaction).delete(deletereaction);

module.exports=router;
