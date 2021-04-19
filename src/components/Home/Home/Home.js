import React from 'react';
import ContactUs from '../Contact/ContactUs/ContactUs';
import Features from '../Feature/Features/Features';
import Footer from '../Footer/Footer/Footer';
import Header from '../Headers/Header/Header';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Features></Features>
           <Services></Services>
           <Testimonials></Testimonials>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;