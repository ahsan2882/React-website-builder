import React from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import "react-color-palette/lib/css/styles.css";
import SideToolBarCss from './SideToolBar.module.css'

export default function SideToolBar() {
    const [color, setColor] = useColor("hex", "#121212");
    return (
        <>
            <nav>
                <ul className={SideToolBarCss.mainNav}>
                    <li> Typography 
                        <ul>
                            <li><button><i className="fas fa-bold"></i></button></li>
                            <li><button><i className="fas fa-italic"></i></button></li>
                            <li><button><i className="fas fa-underline"></i></button></li>
                            <li><button><i className="fas fa-align-left"></i></button></li>
                            <li><button><i className="fas fa-align-center"></i></button></li>
                            <li><button><i className="fas fa-align-right"></i></button></li>
                            <li><button><i className="fas fa-align-justify"></i></button></li>
                        </ul>
                    </li>
                    <li><button><i className="fas fa-link"></i></button></li>
                    <li><ColorPicker color={color} onChange={setColor} hideHSV dark></ColorPicker></li>
                    <li><button><i className=" fas fa-trash-alt"></i></button></li>
                </ul>
            </nav>
        </>
    )
}
