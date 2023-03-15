const router=require('express').Router();

const{
    getAllThought

}= require('../../controllers/thoughtcontroller.js');

router.route('/').get(getAllThought);

module.exports=router;
