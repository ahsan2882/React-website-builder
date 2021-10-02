import React, { useState } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'

export default function EditScreen({temp, previewTemp}) {
    const [defWidth, setWidth] = useState(window.innerWidth);
    const tempN = temp;
    previewTemp(tempN);
    return (
        <>
            <HeaderEdit setWidth={setWidth}/>
            <ContainerEdit defWidth={defWidth} templateNum={temp}/>
            <FooterEdit/>
        </>
    )
}
