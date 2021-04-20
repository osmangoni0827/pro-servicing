import React, { useEffect, useState } from 'react';
import './Services.css';
import service from '../../../../image/servicepicter1.jpg';
import KindofService from '../KindofService/KindofService';

const Services = () => {
    const [Services,setService]=useState([]);
    useEffect(()=>{
        fetch('https://pacific-harbor-21117.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <section className='services py-5'>
            
            <h1>SERVICES</h1>
            <small>We offer a full range of repair services provided by an experienced and specialized team
            </small>

            <div className='container'>
                <div className='row '>
                {
                    Services.map(service=><KindofService service={service}></KindofService>)
                }
                </div>
            </div>
           
           
        </section>
    );
};

export default Services;