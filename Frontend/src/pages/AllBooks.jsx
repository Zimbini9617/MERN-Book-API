import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';
import { useNavigate } from 'react-router-dom';
const AllBooks = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const getAllBook = async () => {
    try {
      return await axios
        .get('http://localhost:5000/books')
        .then((res) => res.data)
        .then((data) => setBooks(data.books));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBook();
  }, []);

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`).then((res) => {
      console.log(res);
      if (res) {
        getAllBook();
        navigate('/all-books');
      }
    });
  };

  return (
    <div>
      <h1>Show all Books</h1>
      <div className="flex gap-2 flex-wrap">
        {books.map((book) => (
          <Book book={book} key={book._id} deleteBook={deleteBook} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;