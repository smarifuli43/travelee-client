import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const { name, img, price, description, country, time,people,_id } = props.service;
 
  return (
    <div>
      <div className='service'>
        <Card className='h-100 card'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Text className="price">${price}/person</Card.Text>
            <Card.Text className='card-info'>
              <div className='d-flex align-items-center border-end'>
                <i class='far fa-clock me-1'></i>
                <span className='me-2'>{time} days</span>
              </div>
              <div className='d-flex align-items-center border-end'>
                <i class='fas fa-user-friends me-1'></i>
                <span className='me-2'>People: {people}</span>
              </div>
              <div className='d-flex align-items-center'>
                <i class='fas fa-map-marker-alt me-1'></i>
                <span>{country}</span>
              </div>
            </Card.Text>
            <Card.Title className="mb-3">{name}</Card.Title>
            <Card.Text>{description.slice(0, 90)} ...</Card.Text>
            <Link to={`/book/${_id}`}>
              <Button className='btn-travelee mt-3'>Book Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Service;