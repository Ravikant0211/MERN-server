const topicController = require("../controller/topicController");
const express = require("express");
const router = express.Router();

router.route("/addtopic").post(topicController.addTopic);

module.exports = router;
