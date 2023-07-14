const UserData = require("../models/userModel");
const createHttpError = require("http-errors");

const loginUser = async (req, res, next) => {
  try {
    const { emailId, password } = req.body;

    const result = await UserData.findOne({ emailId, password });
    if (!result) {
      throw createHttpError.Unauthorized("Invalid username or password");
    }
    res.status(200).json({
      success: true,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { emailId, password, projectId } = req.body;
    const userData = new UserData({
      emailId,
      password,
      projectId,
    });

    const result = await userData.save();
    res.status(200).json({
      success: true,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
  registerUser,
};
