import React from 'react'
import StaticsecurityCss from './staticsecuritybanner.module.css'
import Img1 from '../../../assets/template2images/static-security-banner.jpg'
export default function Staticsecuritybanner() {
    return (
        <section className={StaticsecurityCss['header-img-serv']}>
        <div class={StaticsecurityCss['head-img-text']}>
            <h1 className={StaticsecurityCss.head1}>Static Security</h1>
            <div className={StaticsecurityCss.dash}></div>
            
        </div>
         <img src={Img1} alt="static-security"/>
        
    </section>
    )
}
