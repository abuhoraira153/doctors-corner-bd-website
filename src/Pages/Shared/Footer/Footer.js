import React from 'react';
import './Footer.css';


import { Link } from 'react-router-dom';
const Footer = () => {

    
    return (
        <div className = "row footer mt-4">
            <div className="col-lg-6 copy-right">
                <h3 className = "small mb-0 mt-1">&copy; Copy-right Abu Horaira</h3>
            </div>
            <div className="col-lg-6 d-flex">
                <Link className = "lern-more" to = "/contactUs">For quick contact</Link>
            </div>
        </div>
    );
};

export default Footer;