import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Book.css';

const Book = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [service, setService] = useState({});
  const { name, img, price, description, country, time, people, _id } = service;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.tourName = name;
    data.time = time;
    data.country = country;
    data.price = price;
    data.people = people;
    data.status = 'pending';
    console.log(data);
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Booking successful')
          reset();
       }
      });
  };

  return (
    <div className='container my-5'>
      <h3 className='heading-main mb-5'>{name}</h3>
      <div className='row align-items-center'>
        <div className='col-12 col-lg-6'>
          <img src={img} alt='' className='img-fluid' />
        </div>
        <div className='col-12 col-lg-6 mt-4 mt-lg-0'>
          <h5 className='mt-4 mt-lg-0'>
            Hello <span style={{ color: '#0791BE' }}>{user.displayName}! </span>
            book for your next tour
          </h5>
          <p>{description}</p>
          <h3>Travel info:</h3>
          <div className='travel-info position-static '>
            <div className='d-flex align-items-center '>
              <i className='far fa-clock me-1'></i>
              <span className='me-2'>{time} days</span>
            </div>
            <div className='d-flex align-items-center '>
              <i className='fas fa-user-friends me-1'></i>
              <span className='me-2'>People: {people}</span>
            </div>
            <div className='d-flex align-items-center'>
              <i className='fas fa-map-marker-alt me-1'></i>
              <span>{country}</span>
            </div>
          </div>
          <h5 className='mt-3'>
            Price: <span style={{ color: '#0791BE' }}>${price}</span>
          </h5>
        </div>
      </div>
      <h3 className='text-center mt-5'>Book Now</h3>
      <div className='row shadow p-4 d-flex justify-content-center mt-4'>
        <div className='col-12'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-3'>
                <input
                  placeholder='Your Name'
                  {...register('name', { required: true })}
                  value={user.displayName}
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <input
                  type='email'
                  placeholder='Your Email'
                  {...register('email', { required: true })}
                  value={user.email}
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <input
                  placeholder='Your address'
                  {...register('address', { required: true })}
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <input
                  type='date'
                  placeholder='Journey Date'
                  {...register('date', { required: true })}
                />
              </div>
            </div>

            <input
              type='submit'
              className='btn-travelee text-uppercase'
              value='Book now'
              style={{ width: '150px' }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
