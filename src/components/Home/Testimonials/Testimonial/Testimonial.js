import React from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
const Testimonial = ({review}) => {
    const{title,description,customerName,customerTitle}=review
    return (
        <div className='col-12 col-md-4 col-sm-6 '>
            <div className='testimonial'>
            <h3>{title}</h3>
            <div className='py-3'>
            <FontAwesomeIcon icon={faStar} color='#FF433F'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#FF433F'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#FF433F'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#FF433F'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color='#FF433F'></FontAwesomeIcon>
            </div>
            <p>{description}</p>
            <div>
                <h6>{customerName}</h6>
                <p>{customerTitle}</p>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;