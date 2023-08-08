import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-600  text-white font-semibold flex items-center justify-between px-8 py-2'>
      <h1 className='text-white font-mono font-bold'>BOOK STORE</h1>
      <ul className='flex gap-5'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-books">AllBooks</Link></li>
        <li><Link to="/add-books">AddBooks</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;