import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  // const [approve, setApprove] = useState('pending');
  useEffect(() => {
    fetch('https://enigmatic-dusk-22710.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `https://enigmatic-dusk-22710.herokuapp.com/booking/${id}`;
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
  const handleApproval = (id) => {
    const orderClicked = orders.filter((order) => order._id === id);
    orderClicked[0].status = 'Approved';
    fetch(`https://enigmatic-dusk-22710.herokuapp.com/booking/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderClicked),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const ord = orders.filter(
            (order) => order.status === 'pending' || 'Approved'
          );
          setOrders(ord);
        }
      });
  };
  return (
    <div className='container'>
      <h2 className='heading-main my-5'> All orders </h2>
      {orders.length === 0 ? (
        <h2 className='text-center my-5 text-danger'>
          --------No Order-------
        </h2>
      ) : (
        orders.map((order) => (
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
        ))
      )}
    </div>
  );
};

export default ManageOrder;
