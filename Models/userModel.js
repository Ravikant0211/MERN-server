const mongoose = require("mongoose");

const UserData = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A user must have a name"],
      trim: true,
    },
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
