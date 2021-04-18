import React from 'react';
import './FeaturesType.css';
const FeaturesType = ({features}) => {
    const {icon ,title,description}=features
    return (
        <div className='col-12 col-md-3 featureType'>
            <div className='imageStyle'>
                <img src={icon} alt=''></img>
            </div>
            <h4>{title}</h4>
            <small>{description}</small>
        </div>
    );
};

export default FeaturesType;