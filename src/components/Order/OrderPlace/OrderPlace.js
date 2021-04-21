import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './OrderPlace.css';
const OrderPlace = () => {
    const orderTitle = sessionStorage.getItem('orderTitle')
    const price = sessionStorage.getItem('orderPrice')
    let email,name;
    const [formData,setFormData]=useState({orderTitle,price})
    

    const HandleInput=(e)=>{
        if(e.target.name==='email'){
             email=e.target.value;
             const NewData={...formData}
            NewData.email=email
            setFormData(NewData)
        }
        else if(e.target.name==='name'){
            name=e.target.value
            const NewData={...formData}
            NewData.name=name
            setFormData(NewData)
        }
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-9 col-10 col-sm-8'>
                    <h2 className='text-center py-3'>Order Now</h2>
                    <div className='order'>
                        <div className='form' >
                            <form>
                                <div className="form-group">
                                    <input type="email" onChange={HandleInput} className="form-control" required name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  onChange={HandleInput} className="form-control" required name="name" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text"  onChange={HandleInput} id='orderName' className="form-control" value={orderTitle} name="orderName" placeholder="Order Name" />
                                </div>
                            </form> 
                        </div>
                       <div className='payment'>
                       <h6>Pay With Visa Card</h6>
                        <ProcessPayment formdata={formData}></ProcessPayment>
                        <p>Your Service Charged will be ${price}</p>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OrderPlace;