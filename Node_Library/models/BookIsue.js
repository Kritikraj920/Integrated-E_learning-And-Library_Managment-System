const mongoose = require("mongoose");
const IssueSchema = new mongoose.Schema({
    student: Object,
    book: Object,
    issueDate: Date,
    submissionDate: Date,
    status:String
  });
  module.exports= new mongoose.model('BooksIsue', IssueSchema);