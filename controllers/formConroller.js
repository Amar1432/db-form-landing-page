const createHttpError = require("http-errors");
const FormData = require("../models/formModel");

const saveFormData = async (req, res, next) => {
  try {
    const { name, mobileNumber, emailId, message, projectId } = req.body;

    const formData = new FormData({
      name,
      emailId,
      message,
      projectId,
      mobileNumber,
    });

    const result = await formData.save();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getFormData = async (req, res, next) => {
  try {
    const { projectId } = req.query;
    const result = await FormData.find({ projectId });
    res.status(200).json({
      success: true,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveFormData,
  getFormData,
};
