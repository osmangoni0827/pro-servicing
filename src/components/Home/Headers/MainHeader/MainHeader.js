import React from 'react';
import Navbar from '../Navbar/Navbar';
import ServiceingProduct from '../ServiceingProduct/ServiceingProduct';
import './MainHeader.css';
const MainHeader = () => {
    return (
       <section className='MainHeaderStyle'>
           <Navbar></Navbar>
           <div className=' d-flex headLine align-items-center justify-content-center'>
                <div className=''>
                    <h2>Fast & Quick Fix</h2>
                    <p>Just Send Valuable Laptop , Pc , Mac , Mobile
                        <br/>Gaming Device or Smartphone and We will take care of it
                    </p>
                </div>
           </div>
           <ServiceingProduct></ServiceingProduct>
       </section>
    );
};

export default MainHeader;