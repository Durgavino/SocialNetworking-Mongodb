const router=require('express').Router();

const{
    getAllThought,
    CreateaThought,

}= require('../../controllers/thoughtcontroller.js');

router.route('/').get(getAllThought).post(CreateaThought);

module.exports=router;
