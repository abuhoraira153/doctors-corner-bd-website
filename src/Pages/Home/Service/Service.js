import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id, name, description, img} = service;
    return (
        <div className = "service">
            <img src={img} alt="" />
            <h3 className = "my-3">{name}</h3>
            <p className = "px-4">{description}</p>
            <br />
            <Link to = {`/details/${id}`}>
            <button className = "btn btn-warning mb-4">Details</button>
            </Link>
        </div>
    );
};

export default Service;