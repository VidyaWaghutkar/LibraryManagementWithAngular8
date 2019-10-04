const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Book
let Book = new Schema({
  BookName: {
    type: String
  },
  BookDescription: {
    type: String
  },
  BookPrice: {
    type: Number
  }
},{
    collection: 'Book'
});

module.exports = mongoose.model('Book', Book);
