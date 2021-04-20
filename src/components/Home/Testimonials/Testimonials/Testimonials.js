import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [Review,setReview]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4500/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[Review])
    return (
        <section className='testimonials'>
            <div className='container py-5'>
            <h1>WHAT PEOPLE SAY</h1>
            <small>Real customers reviews</small>
            <div className='row'>
                {
                    Review.map(review=><Testimonial review={review}></Testimonial>)
                }
            </div>
            </div>
            
        </section>
    );
};

export default Testimonials;