const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// name, author, desc, price, image, available
const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema); // books

module.exports = Book;