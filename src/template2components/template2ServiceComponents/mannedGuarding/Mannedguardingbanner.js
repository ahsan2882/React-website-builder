import React from 'react'
import MannedBannerCss from './Mannedguardingbanner.module.css'
import Img1 from'../../../assets/template2images/manned-banner.jpg'
export default function Mannedguardingbanner() {
    return (
        <section className={MannedBannerCss['header-img-serv']}>
        <div class={MannedBannerCss['head-img-text']}>
            <h1 className={MannedBannerCss.head1}>Manned Guarding</h1>
            <div className={MannedBannerCss.dash}></div>   
        </div>
         <img src={Img1} alt="technology-product"/>
        
    </section>
    )
}
