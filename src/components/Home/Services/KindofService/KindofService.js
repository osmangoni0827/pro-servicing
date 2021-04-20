import React from 'react';
import { useHistory } from 'react-router';
import './KindofService.css'
const KindofService = ({service}) => {
    const{img,title,description,price}=service;
    const history=useHistory()
    const HandleOrder=()=>{
        sessionStorage.setItem('orderPrice',price);
        sessionStorage.setItem('orderTitle',title);
        history.push('/dashboard/orderplace');

    }
    return (
        <div className='col-12 col-md-4 py-3'>
            
               <div className='kindofService'>
                <div className='image'>
                <img src={img} alt=''></img>
                </div>
               <div className='p-4 '>
                    <h4>{title}</h4>
                    <h3>${price}</h3>
                    <p>{description}</p>
                    <button onClick={HandleOrder} className='btn btn-info'>Place Order</button>
               </div>
               </div>
        </div>
    );
};

export default KindofService;