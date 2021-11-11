import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myorder?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `http://localhost:5000/booking/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('deleted successfully');
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className='container'>
      <h2 className='heading-main my-5'> My orders </h2>
      {orders.length === 0 ? (
        <h2 className='text-center my-5 text-danger'>
          --------No Order-------
        </h2>
      ) : (
        orders.map((order) => (
          <div key={order._id}>
            <div className=' shadow border rounded-2 p-3 mb-4'>
              <div className='d-flex justify-content-between '>
                <div className=''>
                  <h5>Tour Name: {order.tourName}</h5>
                </div>
                <div className=''>
                  <div className=' p-1 rounded-2 bg-secondary text-white mb-1'>
                    {order.status}
                  </div>
                  <button
                    className='btn-danger btn'
                    onClick={() => handleDelete(order._id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className='row border-top pt-2 mt-3'>
                <div className='col-6 col-md-3'>
                  {' '}
                  Name: <span style={{ color: '#0791BE' }}>
                    {order.name}
                  </span>{' '}
                </div>
                <div className='col-6 col-md-3'>
                  Date: <span style={{ color: '#0791BE' }}>{order.date}</span>{' '}
                </div>
                <div className='col-6 col-md-3'>
                  Price: <span style={{ color: '#0791BE' }}>{order.price}</span>
                </div>

                <div className='col-6 col-md-3'>
                  Country:{' '}
                  <span style={{ color: '#0791BE' }}>{order.country}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrder;
