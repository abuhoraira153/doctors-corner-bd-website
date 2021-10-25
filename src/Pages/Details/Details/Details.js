import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    // const [services, setServies] = useState([])
    // useEffect(()=>{
    //     fetch('doctors.json')
    //     .then(res=>res.json())
    //     .then(data=>setServies(data))
    // },[])
    const {serviceId} = useParams();
    // console.log(serviceId)
    return (
        
        <div>
            <h2>Details Of : {serviceId}</h2>
            
        </div>
    );
};

export default Details;