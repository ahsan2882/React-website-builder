import React, { useState } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'

export default function EditScreen({temp}) {
    const [defWidth, setWidth] = useState(window.innerWidth);
    const [assetSelected, setAssetSelected] = useState(false);
    return (
        <>
            <HeaderEdit setWidth={setWidth}/>
            <ContainerEdit defWidth={defWidth} templateNum={temp} overlayPresent={assetSelected}/>
            <FooterEdit setOverlay={setAssetSelected}/>
        </>
    )
}
