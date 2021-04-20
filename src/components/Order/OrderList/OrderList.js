import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderInformation from '../OrderInformation/OrderInformation';


const OrderList = () => {

   const[orders,setorders]=useState([]);
   
       fetch('http://localhost:4500/orderList',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({})
       })
       .then(res=>res.json())
       .then(data=>{
           setorders(data)
       })
   
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
                    orders.map(order=><OrderInformation order={order}></OrderInformation>)
                }
                </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default OrderList;