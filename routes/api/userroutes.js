const router=require('express').Router();

const {
    getAllUser,
    getUserbyId,
    createaNewUser,
    updateaUserbyId,
    deleteTheUserById
} = require('../../controllers/usercontroller');

router.route('/').get(getAllUser).post(createaNewUser);

router.route('/:userId').get(getUserbyId).put(updateaUserbyId).delete(deleteTheUserById);


module.exports=router;