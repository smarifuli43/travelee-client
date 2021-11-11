import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://enigmatic-dusk-22710.herokuapp.com/blog')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className='container my-5'>
      <div
        className='d-flex align-items-center'
        style={{ width: '250px', margin: 'auto' }}
      >
        <div className='hl'></div>
        <h5 className='heading-before'>Our Blog post</h5>
      </div>
      <h2 className='heading-main '>Recent Blog Post</h2>

      <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
