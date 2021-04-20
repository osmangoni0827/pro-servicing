import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [Review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://pacific-harbor-21117.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
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