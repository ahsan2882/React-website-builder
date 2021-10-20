import React, { useEffect, useRef, useState } from 'react'
import ContainerEditCss from './ContainerEdit.module.css'

import { Header01 } from '../template1components/Header01'
import { Service01 } from '../template1components/Service01'
import { Testimonials } from '../template1components/Testimonials';
import { Prizing01 } from '../template1components/Prizing01'
import { Guard01 } from '../template1components/Guard01'
import { News01 } from '../template1components/News01'
import { Program01 } from '../template1components/Program01'
import { About01 } from '../template1components/About01'
import { Footer01 } from '../template1components/Footer01'

import Services3 from '../template3components/Services3'
import Latestnews3 from '../template3components/Latestnews3'
import Ourprograms3 from '../template3components/Ourprograms3'
import About3 from '../template3components/About3'
import Accrediation3 from '../template3components/Accrediation3'
import Footer3 from '../template3components/Footer3'
import Guard3 from '../template3components/Guard3'

import Header4 from '../template4components/Header4';
import HeroSection4 from '../template4components/HeroSection4';
import AboutUs4 from '../template4components/AboutUs4';
import Pricing4 from '../template4components/Pricing4';
import Services4 from '../template4components/Services4';
import OurGuards4 from '../template4components/OurGuards4';
import Blog4 from '../template4components/Blog4';
import Accreditation4 from '../template4components/Accreditation4';
import Footer4 from '../template4components/Footer4';
// import EmptyTemplate from '../editorScreen/EmptyTemplate'
// import Contact4AssetCss from '../assets/editingScreenAssets/contactusEditAssets/Contact4Asset.module.css'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'


export default function ContainerEdit({ defWidth, templateNum, overlayPresent }) {
    const htmlRef = useRef(null);
    const [updateChildren, setUpdateChildren] = useState([])
    const [overSection, setOverSection] = useState(false);
    const [sectionKey, setSectionKey] = useState(null);
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            console.log(item)
            let valueString = Object.values(item)[0];
            console.log(valueString)
            setUpdateChildren([...updateChildren, assetObject[valueString]])
            // document.getElementsByClassName("getInnerHTML");
            const elem = document.getElementsByClassName('Contact4Asset_firstHead__22xbT')[0]
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
        console.log("use effect ran:   ", defWidth)
    }, [defWidth]);
    useEffect(() => {
        if (temp === 1) {
            setUpdateChildren([<Header01 />, <Service01 />, <Testimonials />, <Prizing01 />, <Guard01 />, <News01 />, <Program01 />, <About01 />, <Footer01 />])
        }
        else if (temp === 2) {
            setUpdateChildren([<h2>Template 2 Components here!!</h2>])
        }
        else if (temp === 3) {
            setUpdateChildren([<Services3 />, <Latestnews3 />, <Guard3 />, <Ourprograms3 />, <About3 />, <Accrediation3 />, <Footer3 />])
        }
        else if (temp === 4) {
            setUpdateChildren([<HeroSection4 />, <AboutUs4 />, <Pricing4 />, <Services4 />, <OurGuards4 />, <Blog4 />, <Accreditation4 />, <Footer4 />])
        }
        else if (temp === 0) {
            setUpdateChildren([])
        }
    }, [temp])
    const moveUp = (indexC) => {
        let newArray = [...updateChildren];
        let currentCom = newArray[indexC];
        newArray[indexC] = newArray[indexC - 1];
        newArray[indexC - 1] = currentCom;
        setUpdateChildren([...newArray])
        // console.log(updatedMoved);
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
    return (
        <>
            {/* {(canDrop ? <div style={{ "background": `rgba(0,0,0,0.5)` }} className={ContainerEditCss.overlay}></div> : null)} */}
            <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                </div>
                <div className={`${ContainerEditCss.editing} mx-auto overflow-y-auto`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)` } : null}>
                    {/* <EmptyTemplate/> */}
                    {/* <div className="getInnerHTML" ref={htmlRef}> */}
                    {updateChildren.map((items, index) => {
                        return (
                            // 
                            <>
                                <section key={index}
                                    onMouseEnter={() => {
                                        setOverSection(true);
                                        setSectionKey(index)
                                    }}
                                    onMouseLeave={() => setOverSection(false)}
                                    className={(overSection && sectionKey === index) ? "border-2 border-solid border-red-500 relative" : "border-2 border-solid border-transparent"}>
                                    {items}
                                    <div className="flex w-32 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "2rem" } : { display: "none" }}>
                                        <button className="bg-red-500 p-3" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                        <button className="bg-red-500 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                        <button className="bg-red-500 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
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

// export const InnerHTML = () => {

// }