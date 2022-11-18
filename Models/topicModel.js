const mongoose = require("mongoose");

const Topic = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A topic must have a title"],
    unique: true,
    trim: true,
  },
  content: String,
  percentage: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Topic", Topic);
