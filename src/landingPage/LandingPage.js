import React from 'react'
import { Header } from "./LandingHeader"
//  import { HeroSec } from "./LandingHeroSec"
import { Sec02 } from "./LandingSec02"
// import { Sec03 } from "./LandingSec03"
// import { Sec04 } from "./LandingSec04"
import { Sec05 } from "./LandingSec05"
import Slider from "./LandingSlider"
import { Footer } from "./LandingFooter"
import LandingPageCss from './LandingPage.module.css'

export const LandingPage = ({ setLoaded }) => {
    return (
        <>
            <section className={LandingPageCss.wholeBody}>
                <Header />
                {/* <HeroSec /> */}
                <Sec02 />
                {/* <Sec03 />
                    <Sec04 /> */}
                <Slider />
                <Sec05 />

                <Footer />
            </section>
        </>
    );
}
