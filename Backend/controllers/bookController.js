const Book = require('../models/Book');

const allBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();

    if (!books) {
      return res.status(400).json({ message: 'Book not found' });
    }

    return res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  }
};

const addBook = async (req, res) => {
  const { name, author, desc, price, image, available } = req.body;
  let book;

  try {
    book = new Book({ name, author, desc, price, image, available });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: 'Book not added' });
  }
  return res.status(202).json({ book });
};

const bookById = async (req, res) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findById({ _id: id });
    if (!book) {
      return res.status(500).json({ message: 'Book not added' });
    }
  } catch (err) {
    console.log(err);
  }

  return res.status(202).json({ book });
};

const updateBook = async (req, res) => {
  const { name, author, desc, price, image, available } = req.body;
  const id = req.params.id;

  let book;
  try {
    book = await Book.findByIdAndUpdate(
      { _id: id },
      {
        name,
        author,
        desc,
        price,
        image,
        available,
      }
    );

    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: 'Book not updated' });
  }

  return res.status(202).json({ message: 'Book is updated sucessfully' });
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndRemove({ _id: id });
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res
      .status(500)
      .json({ message: 'Book is not available with this id' });
  }

  return res.status(202).json({ message: 'Book is Deleted sucessfully' });
};
module.exports = { allBooks, addBook, bookById, updateBook, deleteBook };