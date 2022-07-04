const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
// const verify = require('../utils/verified');

const {
    getAllUser,
    getSingleUser,
    updateUser,
    removeUser,
    createUser,
    signInUser,
    verifyUser,
    forgetPassword,
    newPassword
} = require('../controller/userController');

router.route('/register').post(upload, createUser);
router.route("/:id/:token").get(verifyUser);
router.route('/signIn').post(upload, signInUser);
router.route('/forgetPassword').post(forgetPassword);
router.route('/newPassword').post(newPassword);

router.route('/allUser').get(getAllUser);
router.route('/:id').get(getSingleUser);

router.route('/:id/update').patch(updateUser);
router.route('/:id/delete').delete(removeUser);

module.exports = router;