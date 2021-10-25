import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div id = "home">
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;