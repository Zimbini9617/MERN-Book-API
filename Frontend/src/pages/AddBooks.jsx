import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [checked, setChecked] = useState(false);
  const [book, setBook] = useState({
    name: '',
    author: '',
    desc: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      await axios
        .post('http://localhost:5000/books', {
          name: String(book.name),
          author: String(book.author),
          desc: String(book.desc),
          price: Number(book.price),
          image: String(book.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold font-mono">ADD NAME OF THE BOOK:</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium text-gray-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={book.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="block font-medium text-gray-800">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="block font-medium text-gray-800">
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              onChange={handleChange}
              value={book.desc}
              className="mt-1 p-2 border border-black rounded w-full required"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="block font-medium text-gray-800">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
              value={book.price}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="block font-medium text-gray-800">
              Image:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={book.image}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-500 rounded w-full required"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="available">Available</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="font-bold font-mono border-2 border-white px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-400"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;