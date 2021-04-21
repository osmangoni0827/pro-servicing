import React from 'react';
import laptop from '../../../../image/laptoservice.png'
import desktop from '../../../../image/settings.png';
import printer from '../../../../image/print.png';
import smartphone from '../../../../image/smartphone.png';
import ServicieingPdCard from '../ServiceingPdCard/ServicieingPdCard';
import './ServiceProduct.css';
const ServiceingProducts=[
    {
        icon:laptop,
        title:'Laptop Servicing',
        price:'$20',
    },
    {
        icon:desktop,
        title:'Desktop Servicing',
        price:'$50',
    },
    {
        icon:printer,
        title:'Printer Servicing',
        price:'$80',
    },
    {
        icon:smartphone,
        title:'Smartphone Servicing',
        price:'$100',
    }
]
const ServiceingProduct = () => {
    return (
       <div className='product'>
                <div className='container '>
            <div className='row'>
                {
                    ServiceingProducts.map(pd=><ServicieingPdCard product={pd}></ServicieingPdCard>)
                }
            </div>
            </div>
       </div>
       
    );
};

export default ServiceingProduct;