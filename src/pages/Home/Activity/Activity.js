import React from 'react';
import './Activity.css'

import adventure from '../../../img/activity/adventure.png'
import trekking from '../../../img/activity/trekking.png'
import campFire from '../../../img/activity/camp fire.png'
import offRoad from '../../../img/activity/off road.png'
import camping from '../../../img/activity/camping.png'
import exploring from '../../../img/activity/exploring.png'


const Activity = () => {
  return (
    <div className='activity my-5 '>
      <div className='container'>
        <div
          className='d-flex align-items-center'
          style={{ width: '300px', margin: 'auto' }}
        >
          <div className='hl'></div>
          <h5 className='heading-before'>CHOOSE OUR ACTIVITIES</h5>
        </div>
        <h2 className='heading-main text-white'>TRAVEL ACTIVITIES</h2>

        <div className="row py-5">
          <div className="col-6 col-md-4 col-xl-2 activity-icon pb-4 pb-lg-0">
          <img src={adventure} alt="" />
          <h5 className="mt-3">Adventure</h5>
           <p>23 Destination</p>
          </div>
          <div className="col-6 col-md-4 col-xl-2 activity-icon pb-4 pb-lg-0">
          <img src={trekking} alt="" />
          <h5 className="mt-3">Trekking</h5>
           <p>8 Destination</p>
          </div>
          <div className="col-6 col-md-4 col-xl-2 activity-icon pb-4 pb-lg-0">
          <img src={campFire} alt="" />
          <h5 className="mt-3">Camp Fire</h5>
           <p>12 Destination</p>
          </div>
          <div className="col-6 col-md-4 col-xl-2 activity-icon pb-4 pb-lg-0">
          <img src={offRoad} alt="" />
          <h5 className="mt-3">Off Road</h5>
           <p>19 Destination</p>
          </div>
          <div className="col-6 col-md-4 col-xl-2 activity-icon pb-4 pb-lg-0">
          <img src={camping} alt="" />
          <h5 className="mt-3">Camping</h5>
           <p>15 Destination</p>
          </div>
          <div className="col-6 col-md-4 col-xl-2  activity-icon pb-4 pb-lg-0">
          <img src={exploring} alt="" />
          <h5 className="mt-3">Exploring</h5>
           <p>23 Destination</p>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Activity;