const mongoose = require("mongoose");

const uploadDataSchema = new mongoose.Schema({
    StudentRollno:String,
    title: String,
    description: String,
    category: String,
    department: String,
    year: String,
    subject: String,
    filePath: String,
    status: Boolean, // Default to false
  uploadedDate: Date, // Default to current date
});

module.exports = mongoose.model("UploadData", uploadDataSchema);
