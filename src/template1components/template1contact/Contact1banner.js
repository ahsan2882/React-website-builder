import React from 'react'
import Contactbanner1Css from '../template1contactcomponent/Contact1banner.module.css'
 import Navbar1 from '../Navbar1';
export default function Contact1banner({ showPopup, overSection, displayDevice, linksfunc }) {
    return (
        <><Navbar1 displayDevice={displayDevice} linksfunc={linksfunc} />
        <section className={Contactbanner1Css['head-img2']}>
    <div className={Contactbanner1Css.contentserv}>
     
     <h1 className={Contactbanner1Css.headings}>Contact Us</h1>
    
    </div>
        </section>
        </>
    )
}
