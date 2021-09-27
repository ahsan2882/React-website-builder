import React from 'react'
import BottomFooter4Css from './BottomFooter.module.css'

export default function BottomFooter() {
    return (
        <footer className="bg-black">
            <div className={`${BottomFooter4Css.container1} ${BottomFooter4Css.footerWrapper}`}>
                <p className="text-white">
                    <a href="#" className="no-underline text-white">Copyright</a> © 2021 CITRIX CONSULTANCY. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
}
