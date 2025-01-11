const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uploadedDate: {
    type: Date,
    required: true,
  },
  filePath: {
    type: String, // Store file path
    required: true,
  },
});

const Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;
