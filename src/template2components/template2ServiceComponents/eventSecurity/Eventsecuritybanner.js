import React from 'react'
import EventsecurityCss from './Eventsecuritybanner.module.css'
import Img1 from '../../../assets/template2images/event-secure-banner.jpg'
export default function Eventsecuritybanner() {
    return (
        <section className={EventsecurityCss['header-img-serv']}>
        <div className={EventsecurityCss['head-img-text']}>
            <h1 className={EventsecurityCss.head1}>EVENT SECURITY</h1>
            <div className={EventsecurityCss.dash}></div>
            
        </div>
         <img src={Img1} alt="event-security"/>
        
    </section>
    )
}
