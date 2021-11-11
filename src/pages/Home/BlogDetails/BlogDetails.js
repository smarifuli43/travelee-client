import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BlogDetails.css'

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { title, img, description, author, date } = blog;
  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`).then(res=>res.json()).then(data=>setBlog(data));
  }, [])
  console.log(blog)
  return (
    <div>
      <div className='blog-banner'>
        <div className='container text-center justify-content-center d-flex hero-text'>
          <div className='col-12 col-md-9 col-lg-7 '>
            <h1 className='text-white text-uppercase fw-bolder lh-lg '>
              Our Blog Section
            </h1>
          </div>
        </div>
      </div>
      <div className='container  text-center'>
        <div className='shadow  rounded-2 my-5 p-4 mx-auto' style={{ maxWidth: '1000px' }}>
          <h2 className='heading-main fs-1'>{title}</h2>
          <div
            className='d-flex align-items-center justify-content-between text-secondary mx-auto mt-3'
            style={{ width: '250px' }}
          >
            <div className='d-flex align-items-center justify-content-between'>
              <i class='fas fa-user pe-2'></i>
              <span>{author}</span>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <i class='far fa-calendar-alt pe-2'></i>
              <span>{date}</span>
            </div>
          </div>
          <img
            src={img}
            alt=''
            className='img-fluid mt-4'
            
          />
          <p className='text-muted mt-4 px-2 text-start'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;