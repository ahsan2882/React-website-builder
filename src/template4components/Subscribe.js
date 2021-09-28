import { Editor, Frame } from '@craftjs/core';
import React from 'react'
import { Link } from 'react-router-dom';
import rsswifi from '../assets/template4images/rsswifi.png'
import { TextH1, TextH3 } from '../myComponents/CraftText';
import Subscribe4Css from './Subscribe.module.css'

export default function Subscribe() {
    return (
        <Editor resolver={{TextH3, TextH1}}>
            <Frame>
                <div className={`${Subscribe4Css.container1} ${Subscribe4Css.subscribeSection}`}>
                    <div className={Subscribe4Css.subscribeWrapper}>
                        <img src={rsswifi} alt="subscribe logo" />
                        <div className={Subscribe4Css.rightContainer}>
                            <div className={Subscribe4Css.offer}>
                                <TextH3 classStyle={Subscribe4Css.offerH3} text="Want to know about our offers first?"/>
                                <TextH1 classStyle={Subscribe4Css.offerH1} text="Subscribe our newsletter"/>
                            </div>
                            <div className={Subscribe4Css.inputEmail}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email-address"
                                    className={Subscribe4Css.emailField}
                                />
                                <Link to="#" className={Subscribe4Css.subscribeBtn}>SUBSCRIBE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Frame>
        </Editor>
    );
}
