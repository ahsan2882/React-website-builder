import React, { useState } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'

export default function EditScreen({temp, previewTemp}) {
    const [defWidth, setWidth] = useState(window.innerWidth);
    
    return (
        <>
            <HeaderEdit setWidth={setWidth} previewTempV={previewTemp}/>
            <ContainerEdit defWidth={defWidth} templateNum={temp}/>
            <FooterEdit/>
        </>
    )
}
