import React from 'react'
import LockandunlockbannerCss from './Lockandunlockbanner.module.css'
import Img1 from '../../../assets/template2images/lockadnunlock.jpg'
export default function Lockandunlockbanner() {
    return (
        <section className={LockandunlockbannerCss['header-img-serv']}>
        <div className={LockandunlockbannerCss['head-img-text']}>
            <h1 className={LockandunlockbannerCss.head1}>LOCK AND UNLOCK</h1>
            <div className={LockandunlockbannerCss.dash}></div>
            
        </div>
         <img src={Img1} alt="cctv-monetoring"/>
        
    </section>
    )
}
