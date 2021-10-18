import React from 'react'
import Accreditation2Css from './Accre2Asset.module.css'
import accre1 from '../../template3images/accre1.png'
import accre2 from '../../template3images/accre2.png'
import accre3 from '../../template3images/accre3.png'
import accre4 from '../../template3images/accre4.png'
import accre5 from '../../template3images/accre5.png'
import accre6 from '../../template3images/accre6.png'
import accre7 from '../../template3images/accre7.png'

export default function Accre2Asset() {
    return (
        <>
            <div>
                <section className={Accreditation2Css['heading-sec']}>

                    <div className={Accreditation2Css['heading-main-title']}>
                        <div className={Accreditation2Css['sub-title']}>
                            <h3>We are Verified by Govt</h3>
                        </div>
                        <h1>Accreditation</h1>
                    </div>
                </section>
                <section className={Accreditation2Css['accreditations-sec']}>
                    <div className={Accreditation2Css['container-accre']}>
                        <div className={Accreditation2Css['accre-wrapper']}>
                            <div className={Accreditation2Css.arow}>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre1} alt="aacre1" />

                                </div>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre2} alt="accre2" />

                                </div>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre3} alt="accre3" />

                                </div>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre4} alt="accre4" />

                                </div>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre5} alt="accre5" />

                                </div>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre6} alt="accre6" />

                                </div>
                                <div className={Accreditation2Css['a-card']}>
                                    <img src={accre7} alt="accre7" />

                                </div>

                            </div>


                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}