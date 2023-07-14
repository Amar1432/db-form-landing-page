const express = require("express");
const { saveFormData, getFormData } = require("../controllers/formConroller");
const router = express.Router();

router.post("/save-form", saveFormData);
router.get("/get-form", getFormData);

module.exports = router;
