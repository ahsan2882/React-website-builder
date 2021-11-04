import React from 'react'
import VacantunitcheckbannerCss from './Vacantunitcheckbanner.module.css'
import Img1 from '../../../assets/template2images/unit-banner.jpg'
export default function Vacantunitcheckbanner() {
    return (
        <section className={VacantunitcheckbannerCss['header-img-serv']}>
        <div className={VacantunitcheckbannerCss['head-img-text']}>
            <h1 className={VacantunitcheckbannerCss.head1}>Vacant Unit Check </h1>
            <div className={VacantunitcheckbannerCss.dash}></div>
            
        </div>
         <img src={Img1} alt="cctv-monetoring"/>
        
    </section>
    )
}
