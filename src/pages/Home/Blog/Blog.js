import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  const {title, author, img, description, date, _id} = props.blog
  console.log(props.blog);
  return (
    <div>
      <Card className='h-100 card'>
        <Card.Img variant='top' src={img} height='270px' />
        <Card.Body>
          <Link className='text-decoration-none' to={`/blog/${_id}`}>
            <Card.Title
              className='mb-3 mt-4 text-decoration-none'
              style={{ color: '#0791BE' }}
            >
              {title}
            </Card.Title>
          </Link>
          <Card.Text>
            <div className='d-flex align-items-center justify-content-between text-secondary'>
              <div className='d-flex align-items-center justify-content-between'>
                <i class='fas fa-user pe-2'></i>
                <span>{author}</span>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <i class='far fa-calendar-alt pe-2'></i>
                <span>{date}</span>
              </div>
            </div>
          </Card.Text>
          {/* <Card.Text>{description.slice(0, 90)} ...</Card.Text> */}
          <Link to={`/blog/${_id}`}>
            <Button className='btn-travelee mt-2 text-uppercase'>
              See more
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;