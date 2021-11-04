import React from 'react'
import TechnologyproductbannerCss from './Technologyproductbanner.module.css'
import Img1 from '../../../assets/template2images/technoproduct.jpg'
export default function Technologyproductbanner() {
    return (
        <section className={TechnologyproductbannerCss['header-img-serv']}>
        <div class={TechnologyproductbannerCss['head-img-text']}>
            <h1 className={TechnologyproductbannerCss.head1}>Technology Product</h1>
            <div className={TechnologyproductbannerCss.dash}></div>   
        </div>
         <img src={Img1} alt="technology-product"/>
        
    </section>
    )
}
