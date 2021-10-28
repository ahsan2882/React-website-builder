import React from 'react'
import About2Css from './About2banner.module.css'
import Img1 from '../template2aboutcomponent/about-us-banner.jpg'
export default function About2bannercomponent() {
    return (
        <section className={About2Css['header-img-serv']}>
                <div className={About2Css['head-img-text']}>
                    <h1>About Us </h1>
                    <div className={About2Css.dash}></div>
                </div>
                <img src={Img1} alt="About-banner" />

            </section>
           
    )
} 

