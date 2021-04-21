import React from 'react';
import './ServicePdCard.css';
const ServicieingPdCard = ({ product }) => {
    const { icon, title, price } = product;
    console.log(product);
    return (
        <div className='col-md-3 col-sm-6 col-12'>
            <div className='CardStyle'>
                <img src={icon} alt=''></img>
                <h5>{title}</h5>

                <div className='mt-3'>
                    <small>Starting at</small>
                    <h2>{price}</h2>
                </div>
                <button className='btn btn-info'>Read More</button>
            </div>
        </div>
    );
};

export default ServicieingPdCard;