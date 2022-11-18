const Topic = require("../Models/topicModel");
const User = require("../Models/userModel");

exports.addTopic = async (req, res) => {
  try {
    const newTopic = new Topic(req.body);
    await newTopic.save();

    const user = await User.findById({ _id: newTopic.user });
    user.topics.push(newTopic);
    await user.save();

    res.status(201).json({
      status: "success",
      data: {
        topic: newTopic,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
