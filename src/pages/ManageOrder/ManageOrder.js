import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
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
            console.log(orders);
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleApproval = id => {
    fetch(`http://localhost:5000/booking/${id}`);
    console.log(id);
  }
  return (
    <div className='container'>
      <h2 className='heading-main my-5'> All orders </h2>
      {orders.map((order) => (
        <div key={order._id}>
          <div className=' shadow border rounded-2 p-3 mb-4'>
            <div className='d-md-flex justify-content-between '>
              <div className=''>
                <h5>Tour Name: {order.tourName}</h5>
              </div>
                <div className='d-flex justify-content-between'>
                  <div className=' p-1 me-1 rounded-2 bg-secondary text-white mb-1'>
                    {order.status}
                  </div>
                  <button
                    className='btn-danger btn'
                    onClick={() => handleDelete(order._id)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleApproval(order._id)}
                    className='btn-travelee ms-1'
                  >
                    Approve?
                  </button>
                </div>
          
            </div>
            <div className='row border-top mt-3'>
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
      ))}
    </div>
  );
};

export default ManageOrder;
