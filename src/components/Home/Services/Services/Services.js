import React from 'react';
import './Services.css';
import service from '../../../../image/servicepicter1.jpg';
import KindofService from '../KindofService/KindofService';
const AllServices=[
    {
        img:service,
        title:'DATA BACKUP & RECOVERY',
        description:'We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff',
        price:'240'
    },
    {
        img:service,
        title:'DATA BACKUP & RECOVERY',
        description:'We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff',
        price:'100'
    },
    {
        img:service,
        title:'DATA BACKUP & RECOVERY',
        description:'We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff',
        price:'150'
    }

]
const Services = () => {
    return (
        <section className='services py-5'>
            
            <h1>SERVICES</h1>
            <small>We offer a full range of repair services provided by an experienced and specialized team
            </small>

            <div className='container'>
                <div className='row '>
                {
                    AllServices.map(service=><KindofService service={service}></KindofService>)
                }
                </div>
            </div>
           
           
        </section>
    );
};

export default Services;