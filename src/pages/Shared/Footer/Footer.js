import React from 'react';
import './Footer.css';
import logo from '../../../img/logo.png';

const Footer = () => {
  return (
    <div className='container-flui'>
      <section className='footer-navigation py-5'>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-12 col-md-6 col-lg-4'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                About Us
              </h5>
              <img src={logo} alt='' width='200px' />
              <p className='text-white-50 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod .
              </p>
              <div className='social-media d-flex '>
                <a href='/'>
                  {' '}
                  <i className='fab fa-facebook-f text-white-50 '></i>
                </a>
                <a href='/'>
                  <i className='fab fa-instagram text-white-50 ms-4'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-twitter text-white-50 ms-4'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-github text-white-50 ms-4'></i>
                </a>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 ps-lg-5'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                Quick Links
              </h5>
              <div className='quick-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-50 ms-1'>
                  My Order
                </a>
              </div>
              <div className='quick-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-50 ms-1'>
                  Manage Order
                </a>
              </div>
              <div className='quick-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-50 ms-1'>
                  Add Service
                </a>
              </div>
              <div className='quick-links py-2'>
                <i className='fas fa-chevron-right text-white-50'></i>
                <a href='/' className='text-decoration-none text-white-50 ms-1'>
                 Home
                </a>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 px-lg-4'>
              <h5 className='text-uppercase text-white border-start border-3  ps-2 mb-4'>
                contact information
              </h5>

              <p className='text-white-50 mt-1 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                ipsum.
              </p>
              <div className='mb-2'>
                <i
                  className='fas fa-phone-alt'
                  style={{ color: '#0791BE' }}
                ></i>
                <span className='text-white-50 ms-3'>+01858585858</span>
              </div>
              <div className='mb-2'>
                <i a class='fas fa-envelope' style={{ color: '#0791BE' }}></i>
                <span className='text-white-50 ms-3'>contact@gmail.com</span>
              </div>
              <div className=''>
                <i
                  class='fas fa-map-marker-alt'
                  style={{ color: '#0791BE' }}
                ></i>
                <span className='text-white-50 ms-3'>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
