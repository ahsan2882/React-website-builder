import React from 'react'
import Img1 from '../../../assets/template2images/mobile patrolling.jpg'
import MobilepatrollingCss from './Mobilepatrollingbanner.module.css'
export default function Mobilepatrollingbanner() {
    return (
        <section className={MobilepatrollingCss['header-img-serv']}>
        <div class={MobilepatrollingCss['head-img-text']}>
            <h1 className={MobilepatrollingCss.head1}>Mobile Patrolling</h1>
            <div className={MobilepatrollingCss.dash}></div>
            
        </div>
         <img src={Img1} alt="Mobile-Patrolling"/>
        
    </section>
    )
}
