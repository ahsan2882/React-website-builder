import React from 'react'
import ContactBannerCss from './Contact3banner.module.css'
// import Img1 from '../../assets/template3images/gPeonv.png'
export default function Contact3banner() {
    return (
        <section className={ContactBannerCss['header-img-serv']}>
        <div className={ContactBannerCss['head-img-text']}>
            <h1 className={ContactBannerCss['head1']}>Contact Us</h1>
            <div className={ContactBannerCss.dash}></div>
        </div>
            <img src="https://i.ibb.co/QH3ksQx/gPeonv.png" alt="gPeonv"/>
    </section>
    )
}
