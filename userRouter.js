const express = require('express');
const registerFunction = require('./userController');

const router = express.Router();

router.route("/register").post(registerFunction);

module.exports = router;