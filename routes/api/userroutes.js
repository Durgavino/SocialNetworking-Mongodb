const router = require('express').Router();

const {
    getuser,
    // getUserbyId,
     createaNewUser,
    // updateaUserbyId,
    // deleteTheUserById,
} = require('../../controllers/usercontroller.js');

router.route('/').get(getuser).post(createaNewUser);

// router.route('/:userId').get(getUserbyId).put(updateaUserbyId).delete(deleteTheUserById);


module.exports = router;