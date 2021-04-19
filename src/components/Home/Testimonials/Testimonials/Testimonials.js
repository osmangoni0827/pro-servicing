import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
const TestimonialAll=[
    {
        title:'Great Customer Support',
        description:'keep up the exilent work,Thank You So Much for your help. really it is unbelievable',
        customerName:'Mitchel Johan',
        customerTitle:'Co-Founder Info Labs'
    },
    {
        title:'Great Customer Support',
        description:'keep up the exilent work,Thank You So Much for your help. really it is unbelievable',
        customerName:'Mitchel Johan',
        customerTitle:'Co-Founder Info Labs'
    },
    {
        title:'Great Customer Support',
        description:'keep up the exilent work,Thank You So Much for your help. really it is unbelievable',
        customerName:'Mitchel Johan',
        customerTitle:'Co-Founder Info Labs'
    }
]
const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='container py-5'>
            <h1>WHAT PEOPLE SAY</h1>
            <small>Real customers reviews</small>
            <div className='row'>
                {
                    TestimonialAll.map(review=><Testimonial review={review}></Testimonial>)
                }
            </div>
            </div>
            
        </section>
    );
};

export default Testimonials;