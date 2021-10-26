import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => {
                const newService = data.find(service => service.id == serviceId)
                setServices(newService)
            })
    }, [])
    const { serviceId } = useParams();


    return (
            <div className = "card-style">    
                <div class="card" style={{width: '40rem'}}>
                <img src={services.img} className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h3 class="card-title">{services.name}</h3>
                        <h4>Specialist : {services.specialist}</h4>
                        <h5>Age : {services.age}</h5>
                        <p class="card-text text-dark text-muted">{services.description}</p>
                        <Link to = "/services"><button className = "btn btn-primary">Back to Services</button></Link>
                    </div>
                </div>
            </div>

    );
};

export default Details;