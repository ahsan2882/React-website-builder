import React from 'react'
import ServillancebannerCss from './ServillanceBanner.module.css'
import Img1 from '../../../assets/template2images/247surveillance-banner.jpg'
export default function Servillancebanner() {
    return (
        <section className={ServillancebannerCss['header-img-serv']}>
            <div className={ServillancebannerCss['head-img-text']}>
                <h1 className={ServillancebannerCss.head1}>EVENT SECURITY</h1>
                <div className={ServillancebannerCss.dash}></div>
            </div>
            <img src={Img1} alt="servillance-banner" />

        </section>
    )
}
