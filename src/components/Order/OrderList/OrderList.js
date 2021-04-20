import React, { useContext, useEffect, useState } from 'react';
import { loggedInContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderInformation from '../OrderInformation/OrderInformation';


const OrderList = () => {

const [loggedInUser]=useContext(loggedInContext);
   const[orders,setorders]=useState([]);
   
        useEffect(() => {
            fetch('https://pacific-harbor-21117.herokuapp.com/orderList', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
            })
                .then(res => res.json())
                .then(data => setorders(data))
        }, [loggedInUser.email])
   
    return (
        <div>
        <div className='row'>
        <div className='col-md-4 col-2 col-sm-3'>
            <Sidebar></Sidebar>
        </div>
        <div className='col-md-8 col-10 col-sm-8'>
        <div className='orderList'>
                <div className='row '>
                {
                    orders.map(order=><OrderInformation key={order._id} order={order}></OrderInformation>)
                }
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default OrderList;