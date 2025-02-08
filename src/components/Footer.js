import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='bg-[rgb(20,26,50)]'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex items-center  justify-center text-white'>
          <Link to='/'><span className='text-white'> Home</span></Link>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2025 MoviesFlix™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
