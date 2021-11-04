import React from 'react'
import SupportManagmentbannerCss from './Supportmanagmentbanner.module.css'
import Img1 from '../../../assets/template2images/supportandmanagement-banner.jpg'
export default function SupportManagmentbanner() {
    return (
        <section className={SupportManagmentbannerCss['header-img-serv']}>
        <div class={SupportManagmentbannerCss['head-img-text']}>
            <h1 className={SupportManagmentbannerCss.head1}><b>Support & Managment</b></h1>
            <div className={SupportManagmentbannerCss.dash}></div>   
        </div>
         <img src={Img1} alt="technology-product"/>
        
    </section>
    )
}
