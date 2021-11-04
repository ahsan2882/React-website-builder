import React from 'react'
import CctvmonetoringCss from './Cctvmonetoringbanner.module.css'
import Img1 from '../../../assets/template2images/cctv-banner.jpg'
export default function Cctvmonetoringbanner() {
    return (
        <section className={CctvmonetoringCss['header-img-serv']}>
        <div className={CctvmonetoringCss['head-img-text']}>
            <h1 className={CctvmonetoringCss.head1}>CCTV MONETORING</h1>
            <div className={CctvmonetoringCss.dash}></div>
            
        </div>
         <img src={Img1} alt="cctv-monetoring"/>
        
    </section>
    )
}
