import React from 'react'
import rsswifi from '../assets/template4images/rsswifi.png'
import Subscribe4Css from './Subscribe.module.css'

export default function Subscribe() {
    return (
        <div className={`${Subscribe4Css.container1} ${Subscribe4Css.subscribeSection}`}>
            <div className={Subscribe4Css.subscribeWrapper}>
                <img src={rsswifi} alt="subscribe logo"/>
                <div className={Subscribe4Css.rightContainer}>
                    <div className={Subscribe4Css.offer}>
                        <h3 className={Subscribe4Css.offerH3}>Want to know about our offers frst?</h3>
                        <h1 className={Subscribe4Css.offerH1}>Subscribe our newsletter</h1>
                    </div>
                    <div className={Subscribe4Css.inputEmail}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email-address"
                            className={Subscribe4Css.emailField}
                        />
                        <a href="#" className={Subscribe4Css.subscribeBtn}>SUBSCRIBE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
