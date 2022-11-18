const mongoose = require("mongoose");

const UserData = new mongoose.Schema(
  {
    username: String,
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserData);
