import React from 'react';
import './Orderinformation.css';
const OrderInformation = ({ order }) => {
    const {orderTitle, price, status,paymentId} = order;
    return (
        <div className='col-12 col-md-6 py-3'>

            <div className='orderInformation'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h6>Id: {paymentId}</h6>
                    <h5>{status}</h5>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h3>{orderTitle}</h3>
                    <h3>${price}</h3>
                    </div>
            </div>
        </div>
    );
};

export default OrderInformation;