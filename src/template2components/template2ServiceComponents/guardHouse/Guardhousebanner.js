import React from 'react'
import GuardhouseBannerCss from './Guardhousebanner.module.css'
import Img1 from '../../../assets/template2images/guard-house-banner.jpg'
export default function Guardhousebanner() {
    return (
        <section className={GuardhouseBannerCss['header-img-serv']}>
        <div className={GuardhouseBannerCss['head-img-text']}>
            <h1 className={GuardhouseBannerCss.head1}>GUARD HOUSE</h1>
            <div className={GuardhouseBannerCss.dash}></div>
            
        </div>
         <img src={Img1} alt="event-security"/>
        
    </section>
    )
}
