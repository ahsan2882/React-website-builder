import React, { useEffect, useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import ContainerEditCss from './ContainerEdit.module.css'

import { Header1 } from '../template1components/Header1'
import { Service1 } from '../template1components/Service1'
import { Testimonials1 } from '../template1components/Testimonials1';
import { Prizing1 } from '../template1components/Prizing1'
import { Guard1 } from '../template1components/Guard1'
import { News1 } from '../template1components/News1'
import { Program1 } from '../template1components/Program1'
import { About1 } from '../template1components/About1'
import { Footer1 } from '../template1components/Footer1'

import Services3 from '../template3components/Services3'
import Latestnews3 from '../template3components/Latestnews3'
import Ourprograms3 from '../template3components/Ourprograms3'
import About3 from '../template3components/About3'
import Accrediation3 from '../template3components/Accrediation3'
import Footer3 from '../template3components/Footer3'
import Guard3 from '../template3components/Guard3'

// import Header4 from '../template4components/Header4';
import HeroSection4 from '../template4components/HeroSection4';
import AboutUs4 from '../template4components/AboutUs4';
import Pricing4 from '../template4components/Pricing4';
import Services4 from '../template4components/Services4';
import OurGuards4 from '../template4components/OurGuards4';
import Blog4 from '../template4components/Blog4';
import Accreditation4 from '../template4components/Accreditation4';
// import EmptyTemplate from '../editorScreen/EmptyTemplate'
// import Contact4AssetCss from '../assets/editingScreenAssets/contactusEditAssets/Contact4Asset.module.css'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'
import Header4 from '../template4components/Header4';
import Navigation4 from '../template4components/Navigation4';
import Subscribe4 from '../template4components/Subscribe4';
import FooterContact4 from '../template4components/FooterContact4';
import BottomFooter4 from '../template4components/BottomFooter4';


export default function ContainerEdit({ defWidth, templateNum, overlayPresent }) {
    const htmlRef = useRef(null);
    const [updateChildren, setUpdateChildren] = useState([])
    const [overSection, setOverSection] = useState(false);
    const [currentBackground, setCurrentBackground] = useState("");
    const [sectionKey, setSectionKey] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            console.log(item)
            let valueString = Object.values(item)[0];
            console.log(valueString)
            let Comp = assetObject[valueString]
            setUpdateChildren([...updateChildren, Comp])
            // document.getElementsByClassName("getInnerHTML");
            // const elem = document.getElementsByClassName('Contact4Asset_firstHead__22xbT')[0]
            // const element = document.querySelector(elem);
            // const styleS = window.getComputedStyle(elem);
            // console.log(styleS)

            // document.title = "Editing Contact"
            let inHTML = htmlRef.current;

            console.log(inHTML)
        },
        collect: monitor => ({
            canDrop: !!monitor.canDrop()
        })
    })
    window.resizeTo(defWidth, window.innerHeight);
    const temp = templateNum;

    useEffect(() => {
        console.log("background", currentBackground)
    }, [currentBackground]);
    useEffect(() => {
        if (temp === 1) {
            setUpdateChildren([Header1, Service1, Testimonials1, Prizing1, Guard1, News1, Program1, About1, Footer1])
        }
        else if (temp === 2) {
            // setUpdateChildrenJSX([<h2>Template 2 Components here!!</h2>])
        }
        else if (temp === 3) {
            setUpdateChildren([Services3, Latestnews3, Guard3, Ourprograms3, About3, Accrediation3, Footer3])
        }
        else if (temp === 4) {
            setUpdateChildren([Header4, Navigation4, HeroSection4, AboutUs4, Pricing4, Services4, OurGuards4, Blog4, Accreditation4, Subscribe4, FooterContact4, BottomFooter4])
        }
        else if (temp === 0) {
            // setUpdateChildrenJSX([])
        }
    }, [temp, currentBackground])
    const moveUp = (indexC) => {
        let newArray = [...updateChildren];
        let currentCom = newArray[indexC];
        newArray[indexC] = newArray[indexC - 1];
        newArray[indexC - 1] = currentCom;
        setUpdateChildren([...newArray])
    }
    const moveDown = (indexC) => {
        let newArray = [...updateChildren];
        let currentCom = newArray[indexC];
        newArray[indexC] = newArray[indexC + 1];
        newArray[indexC + 1] = currentCom;
        setUpdateChildren([...newArray])
    }
    const removeComponent = (indexC) => {
        let newArray = [...updateChildren];
        newArray.splice(indexC, 1);
        setUpdateChildren([...newArray])
    }
    // const changeBackground = (indexC) => {
    //     let newArrayJSX = [...updateChildrenJSX]
    //     let Comp = [...updateChildren].at(indexC)
    //     newArrayJSX.splice(indexC, 1, <Comp background={currentBackground} />)
    //     setUpdateChildrenJSX([...newArrayJSX])
    // }
    return (
        <>
            <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                </div>
                <div className={`${ContainerEditCss.editing} mx-auto overflow-y-auto`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)` } : null}>
                    {/* <EmptyTemplate/> */}
                    {/* <div className="getInnerHTML" ref={htmlRef}> */}
                    {updateChildren.map((ItemX, index) => {
                        return (
                            // 
                            <>
                                <section key={index}
                                    onMouseEnter={() => {
                                        setOverSection(true);
                                        setSectionKey(index)
                                    }}
                                    onMouseLeave={() => {
                                        setOverSection(false);
                                        setShowPopUp(false);
                                    }}
                                    className={(overSection && sectionKey === index) ? "border-2 border-solid border-red-500 relative" : "border-2 border-solid border-transparent"}
                                // style={(sectionKey === index) ? {background: currentBackground} : null}
                                >
                                    <ItemX background={(sectionKey === index) ? currentBackground : "none"}/>
                                    {/* {item} */}
                                    <div className="flex w-52 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "2rem", zIndex: "9999999" } : { display: "none" }}>
                                        <button className="bg-red-500 p-3" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                        <button className="bg-red-500 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                        <button className="bg-red-500 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
                                        <button className="bg-red-500 p-3" onClick={() => {
                                            setShowPopUp((popup) => !popup);
                                            // setLastBackground(currentBackground)
                                        }}><i className="far fa-images text-white"></i></button>
                                    </div>
                                    <div style={(showPopUp && sectionKey === index) ? { position: "absolute", top: "5rem", right: "3rem", zIndex: "9999999" } : { display: "none" }}>
                                        <GithubPicker
                                            triangle="top-right"
                                            onChangeComplete={(color) => {
                                                setCurrentBackground(color.hex);
                                                // changeBackground(index);
                                            }}
                                        />
                                    </div>
                                </section>

                            </>
                        )
                    })}
                    {/* </div> */}
                </div>
            </section>
        </>

    );
}