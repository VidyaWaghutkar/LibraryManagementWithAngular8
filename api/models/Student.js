const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Book
let Student = new Schema({
  BookName: {
    type: String
  },
  BookDescription: {
    type: String
  },
  BookPrice: {
    type: Number
  },
  StudentName: {
    type: String
  },
  StudentId: {
    type: String
  },
  IssueDate: {
    type: String
  }
},{
    collection: 'Student'
});

module.exports = mongoose.model('Student', Student);
