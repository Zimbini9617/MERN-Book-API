import React from 'react';
import { Link } from 'react-router-dom';
const Book = ({ book, deleteBook }) => {
  const { name, author, desc, price, image, available, _id } = book;
  return (
    <div className="border border-gray-700 p-2">
      <div className="w-[300px]">
        <img
          src={image}
          alt={name}
          className="w-full object-cover h-[200px] mb-2"
        />
        <h1 className="text-lg font-semibold mb-2">Book Name:{name}</h1>
        <p className="mb-1">Author:{author}</p>
        <p>{desc}</p>
        <p className="mb-1">{price}</p>
        <p>In Stock{available}</p>
      </div>
      <div>
        <Link
          to={`/books/${_id}`}
          className="bg-blue-700 hover:bg-blue-400 text-white px-2 py-1 rounded-md mt-2 inline-block mr-4"
        >
          Update
        </Link>
        <button
          onClick={() => deleteBook(_id)}
          className="bg-red-700 hover:bg-red-400 text-white px-2 py-1 rounded-md mt-2 inline-block mr-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;