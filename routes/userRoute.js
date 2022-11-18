const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.route("/user").post(userController.createUser);

router.route("/user/:username").get(userController.getUser);

module.exports = router;
