const router = require('express').Router();

const {
    getuser,
     getUserbyId,
     createaNewUser,
    updateaUserbyId,
    deleteTheUserById,
    addNewFriend,
    deleteFriend,
} = require('../../controllers/usercontroller.js');

router.route('/').get(getuser).post(createaNewUser);

// router.route('/:userId').get(getUserbyId).delete(deleteTheUserById);

router.route('/:userId').get(getUserbyId).put(updateaUserbyId).delete(deleteTheUserById);

router.route('/:userId/friends/:friendId').post(addNewFriend).delete(deleteFriend);

module.exports = router;