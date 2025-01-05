const express = require('express');
const router = express.Router();
const { signIn, login, userDetails } = require('../controllers/user.controllers');

router.route("/signIn").post(signIn);
router.route("/login").post(login);

router.route("/user/:id").get(userDetails);



module.exports = router;