import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id,img, name, description } = service;
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-5 '>
            <div className='Service-container h-100'>
            <img className='img-fluid' src={img} alt="" />
            <h3 className='mt-2'>{name}</h3>
                <p>{description}</p>
                <Link to={`/details/${id}`}>
                <button className='btn btn-secondary mb-3 shadow-lg'>Details {name}</button>
                </Link>
            </div>
           
        </div>
    );
};

export default Service;