import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import Services from './Services';
import OurGuards from './OurGuards';
import Blog from './Blog';
import Accrediation from './Accrediation';
import Footer from './Footer';
import {Editor, Frame, Element} from "@craftjs/core";

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
            <Accrediation/>
            <Footer/>
        </>
    );
}
