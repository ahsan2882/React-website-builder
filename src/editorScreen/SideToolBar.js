import React from 'react'
import "react-color-palette/lib/css/styles.css";
import SideToolBarCss from './SideToolBar.module.css'

export default function SideToolBar() {
    var selectedText='';
    document.onmouseup = () => {
        selectedText = window.getSelection.toString();
        console.log(selectedText);
    };
    return (
        <>
            <nav>
                <ul className={SideToolBarCss.mainNav}>
                    <li> Typography 
                        <ul>
                            <li><button onClick={()=>{boldText(selectedText)}}><i className="fas fa-bold"></i></button></li>
                            <li><button><i className="fas fa-italic"></i></button></li>
                            <li><button><i className="fas fa-underline"></i></button></li>
                            <li><button><i className="fas fa-align-left"></i></button></li>
                            <li><button><i className="fas fa-align-center"></i></button></li>
                            <li><button><i className="fas fa-align-right"></i></button></li>
                            <li><button><i className="fas fa-align-justify"></i></button></li>
                        </ul>
                    </li>
                    <li><button><i className="fas fa-link"></i></button></li>
                    <li><button><i className=" fas fa-trash-alt"></i></button></li>
                </ul>
            </nav>
        </>
    )
}


const boldText = (selectedText) => {
    console.log("Bold Text")
    var span = '<span style="font-weight:800;">' + selectedText + '</span>';
    document.body.innerHTML = document.body.innerHTML.replace(window.getSelection(), span);
}
