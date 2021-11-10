import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Serivces = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className='container my-5'>
        <div className='text-center mt-4 '>
          <div
            className='d-flex align-items-center'
            style={{ width: '300px', margin: 'auto' }}
          >
            <div className='hl'></div>
            <h5 className='heading-before'>Explore great places</h5>
          </div>
          <h2 className='heading-main'>Our Populer packages</h2>
          <p>
            We provide the best service in Dhaka in this sector. we have 10
            years experience in this sector.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Serivces;
