import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center py-2 font-semibold text-black'>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </footer>
  )
}

export default Footer;