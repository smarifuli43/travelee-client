import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Serivces from '../Services/Serivces';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Serivces></Serivces>
      <Activity></Activity>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;