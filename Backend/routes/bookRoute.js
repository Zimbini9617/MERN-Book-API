const {
  allBooks,
  addBook,
  bookById,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

const express = require('express');

const router = express.Router();

router.get('/', allBooks);
router.post('/', addBook);
router.get('/:id', bookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;