import React from 'react';
import './Features.css';
import fast from '../../../../image/runer-silhouette-running-fast.png';
import doller from '../../../../image/dollar-symbol.png';
import warenty from '../../../../image/warranty.png';
import people from '../../../../image/team.png';
import FeaturesType from '../FeaturesType/FeaturesType';
const AllFeatures=[
    {
        id:1,
        icon:fast,
        title:'WE ARE FIRST',
        description:'Customer Service First In Your Company ... We all say that we want our customer service to be “good;” however'
    },
    {
        id:2,
        icon:doller,
        title:'NO FIX NO FEE',
        description:'If catch Any Fix than We are not taken any fee for this Serving. So You are not taken Any Tension'
    },
    {
        id :3,
        icon :warenty,
        title :'15 DAYS WARRANTY',
        description:'We give you Fifteen Days Warranty .. So you are not taken any Tension'
    },
    {
        id :4,
        icon :people,
        title :'EXPART STAFF',
        description:'Available Any Time our Staff.. We are service 24 hours . Our Door is open Any Time for you'
    },
]
const Features = () => {
    return (
        <div className='FeaturesStyle'>
           <div className='feature'>
           <h1 className='py-3'>Our Valuable Features</h1>
           <div className='container row'>
            {
                AllFeatures.map(features=><FeaturesType key={features.id} features={features}></FeaturesType>)
            }
           </div>
           </div>
        </div>
    );
};

export default Features;