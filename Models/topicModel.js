const mongoose = require("mongoose");

const Topic = mongoose.Schema({
  title: String,
  content: String,
  percentage: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Topic", Topic);
