import React, { useContext, useEffect, useState } from 'react';
import { loggedInContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderInformation from '../OrderInformation/OrderInformation';


const OrderList = () => {

    const [orders, setorders] = useState([]);
    const [loggedInUser]=useContext(loggedInContext);
    const email=loggedInUser.email||sessionStorage.getItem('email');
    useEffect(() => {
        fetch('https://pacific-harbor-21117.herokuapp.com/orderList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {setorders(data)})
    }, [loggedInUser.email])

  
    return (
        <div>
            <div className='row'>
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>

                <div className='col-md-9 col-10 col-sm-8'>
                    <div className='orderList'>
                       { orders.length?
                       <div className='row '>
                            <h1 className='text-center'>Your All Order</h1>
                            {
                                orders.map(order => <OrderInformation key={order._id} order={order}></OrderInformation>)
                            }
                        </div>:
                       <div>
                            <h1 className='text-center text-info mt-5'>Not Found Any Order</h1>
                        <h6 className='text-center' style={{color:'#DB6043'}}>Please Order Now</h6>
                       </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;