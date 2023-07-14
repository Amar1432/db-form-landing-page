const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

const FormData = mongoose.model("formData", FormSchema);
module.exports = FormData;
