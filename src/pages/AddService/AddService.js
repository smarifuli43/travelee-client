import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';


const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('service added');
          reset();
      }
    });
    }
  return (
    <div className="container my-5 add-service">
      <h2 className="heading-main mb-4"> Add a Service</h2>
      <div className="row  d-flex justify-content-center">
        <div className="col-12 col-lg-6 form mx-3 rounded-3 p-4">
         <form onSubmit={handleSubmit(onSubmit)} className="w-100">
        <input placeholder="Service Name" {...register('name', { required: true })} />
        
        <input placeholder="Price" {...register('price', { required: true})} />
        <input placeholder="How many days" {...register('time', { required: true})} />
        <input placeholder="How many people" {...register('people', { required: true})} />
        <input placeholder="location" {...register('country', { required: true})} />
        
        <input placeholder="Image link" {...register('img', { required: true})} />
       <textarea placeholder="Short description" {...register('description', { required: true})} />
        <input type='submit' className="btn-travelee text-uppercase" style={{width:'100px'}} />
        </form>
       </ div>
     </div>
    </div>
  );
};

export default AddService;
