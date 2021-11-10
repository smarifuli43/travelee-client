import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div className='d-flex flex-column align-items-center my-5 py-5 '>
      <h1 style={{ color: '#5C2EDE', fontSize: '80px' }}>404</h1>
      <h2>The page you looking for is not available!</h2>
      <Link to='/' className=' btn-primary btn mt-5'>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;