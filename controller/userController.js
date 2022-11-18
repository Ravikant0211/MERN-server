const User = require("../Models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "sucess",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({
      username: req.params.username,
    }).populate("topics");

    res.status(200).json({
      status: "success",
      data: {
        user: foundUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
