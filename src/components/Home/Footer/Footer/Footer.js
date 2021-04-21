import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logofooter from '../../../../image/logo.png';

const FooterInfo=[
    {
        status:'Contact',
        phone:'2545874521',
        email:'proservicing@bd.com'
    },
    {
        status:'Address',
        address:'Sidestate NSW 4132 Bangladesh'
    },{
        status:'Socials',
        icon1:faFacebookF,
        icon2:faGooglePlusG,
        icon3:faInstagram
    }
]
const Footer = () => {
    
    return (
        <footer className="footer clear-both">
            <div className="container pt-3">
                <div className="row py-3">
                <div className='col-12 col-md-3 col-sm-6 logopart'>
                    <img src={logofooter} alt=''></img>
                    <p>Pro Servicing is a Creative Servicing Company. We are Servicing Laptop,Mobile,Desktop and SmartPhone</p>
                </div>
                    {
                        FooterInfo.map(info=><FooterCol info={info}></FooterCol>)
                    }
                </div>
                <div className="copyRight text-center">
                    <hr></hr>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;