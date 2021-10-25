import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notfound from '../../images/notFound/404.jpg'

const NotFound = () => {
    return (
        <div className = "nFound">
            <img style = {{width:'100%'}} src={notfound} alt="NotFound" />
            <Link to = "/">
            <button className = "btn btn-outline-warning btn-lg">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;