import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container text-center justify-content-center d-flex hero-text'>
        <div className='col-12 col-md-9 col-lg-7 '>
          <h1 className='text-white text-uppercase fw-bolder lh-lg '>
            Fill Your Life With Adventure.
          </h1>
          <p className='text-white'>
            {' '}
            Are you looking a travel agency that provides you everything you
            need to travel. Then you are in the right place.Here we,Travelee,
            will give you the best services as we have more than 10 years
            experiences.
          </p>
          <Link
            to='/book'
            className='btn text-uppercase btn-travelee text-white mt-2'
          >
            Book a Tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;