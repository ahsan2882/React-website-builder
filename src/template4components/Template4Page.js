import React from 'react';
// import Header4 from './Header4';
import HeroSection4 from './HeroSection4';
import AboutUs4 from './AboutUs4';
import Pricing4 from './Pricing4';
import Services4 from './Services4';
import OurGuards4 from './OurGuards4';
import Blog4 from './Blog4';
import Accreditation4 from './Accreditation4';
import Subscribe4 from './Subscribe4';
import FooterContact4 from './FooterContact4';
import BottomFooter4 from './BottomFooter4';
import Header4 from './Header4';
import Navigation4 from './Navigation4';

export default function Template4Page() {
    var template4Components = [<Header4 />, <Navigation4 />, <HeroSection4 />, <AboutUs4 />, <Pricing4 />, <Services4 />, <OurGuards4 />, <Blog4 />, <Accreditation4 />, <Subscribe4/>, <FooterContact4/>, <BottomFooter4/>]
    return (
        <>
            {template4Components.map((item) => <>{ item}</>)}
        </>
    );
}
