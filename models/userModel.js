const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    select: false,
  },
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserData = mongoose.model("userData", UserSchema);
module.exports = UserData;
