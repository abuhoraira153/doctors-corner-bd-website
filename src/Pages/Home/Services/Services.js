import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('doctors.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id = "services" className ="services">
            <h1 className = "text-primary mb-5">Our Services</h1>
            <div className = "service-container">
                {
                    services.map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)
                    }
            </div>
        </div>
    );
};

export default Services;