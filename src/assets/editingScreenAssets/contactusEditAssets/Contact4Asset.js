import React from 'react'
import Contact4AssetCss from './Contact4Asset.module.css'

export default function Contact4Asset() {
    return (
        <>
            <h1 className={Contact4AssetCss.firstHead} style={{ color: "red",fontSize: '5rem' }}>Contact Asset 4</h1>
            <h1 className={Contact4AssetCss.secondHead}>Please contact us</h1>
            <h1 className={Contact4AssetCss.thirdHead}>We love you!</h1>
            <h1 className={Contact4AssetCss.fourthHead}>Send pleasing remarks</h1>
        </>
    )
}
