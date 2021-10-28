import React from 'react'
import Contact2Css from './Contact2.module.css'
import Img1 from '../template2contactcomponent/contact-banner.jpg'
export default function Contact2() {
    return (
        <>
            <section className={Contact2Css['header-img-serv']}>
                <div className={Contact2Css['head-img-text']}>
                    <h1>Contact Us</h1>
                    <div className={Contact2Css.dash}></div>
                </div>
                <img src={Img1} alt="contact-banner" />

            </section>
           





        </>
    )
}
