import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Serivces from '../Services/Serivces';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Serivces></Serivces>
      <Activity></Activity>
    </div>
  );
};

export default Home;