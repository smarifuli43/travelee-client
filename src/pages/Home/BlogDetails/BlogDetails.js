import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { title, img, desctiption, author, date } = blog;
  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`).then(res=>res.json()).then(data=>setBlog(data));
  }, [])
  console.log(blog)
  return (
    <div>
      <h3>this is blog </h3>
      <h3>{ blog.title}</h3>
    </div>
  );
};

export default BlogDetails;