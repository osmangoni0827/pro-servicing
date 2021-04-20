import React from 'react';
import './Orderinformation.css';
const OrderInformation = ({ order }) => {
    const {orderTitle, price, status} = order;
    return (
        <div className='col-12 col-md-4 py-3'>

            <div className='orderInformation'>
                
                    <h5>{status}</h5>
                    <h3>{orderTitle}</h3>
                    <h3>${price}</h3>
            </div>
        </div>
    );
};

export default OrderInformation;