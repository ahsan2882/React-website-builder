import React, { useState, useEffect } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'
import SideToolBar from './SideToolBar';

export default function EditScreen() {
    const [defWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log("use effect ran:   ", defWidth);
    },[defWidth]);
    return (
        <>
            <HeaderEdit setWidth={setWidth}/>
            <ContainerEdit defWidth={defWidth}/>
            <SideToolBar/>
            <FooterEdit/>
        </>
    )
}
