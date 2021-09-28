import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import Services from './Services';
import OurGuards from './OurGuards';
import Blog from './Blog';
import Accreditation from './Accreditation';
import Footer from './Footer';

export default function template4Page() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <AboutUs/>
            <Pricing/>
            <Services/>
            <OurGuards/>
            <Blog/>
            <Accreditation/>
            <Footer/>
        </>
    );
}
