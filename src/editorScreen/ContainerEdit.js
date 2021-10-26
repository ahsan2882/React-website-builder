import React, { useEffect, useState } from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import lz from "lzutf8";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'
import { templateComponents } from '../myComponents/AllTemplates';

export default function ContainerEdit({ templateNum, overlayPresent, saveClicked, setToSave, setSaveClicked, setFileData }) {
    const [updateChildren, setUpdateChildren] = useState([])
    const [overSection, setOverSection] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false)
    const [sectionKey, setSectionKey] = useState(null);
    const [curTemplate, setCurTemplate] = useState(null);
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            console.log(item)
            let valueString = Object.values(item)[0];
            console.log(valueString)
            let Comp = assetObject[valueString]
            setUpdateChildren([...updateChildren, Comp])
        },
        collect: monitor => ({
            canDrop: !!monitor.canDrop()
        })
    })
    const temp = templateNum;
    useEffect(() => {
        if (temp === 1) {
            setUpdateChildren(templateComponents.template1Components)
            setCurTemplate("Template 1");
        }
        else if (temp === 2) {
            setUpdateChildren(templateComponents.template2Components)
            setCurTemplate("Template 2");
        }
        else if (temp === 3) {
            setUpdateChildren(templateComponents.template3Components)
            setCurTemplate("Template 3");
        }
        else if (temp === 4) {
            setUpdateChildren(templateComponents.template4Components)
            setCurTemplate("Template 4");
        }
        else if (temp === 0) {
            setUpdateChildren([])
        }
    }, [temp])
    useEffect(() => {
        if (saveClicked) {
            let htmlString = document.getElementsByClassName("getInnerHTML")[0].innerHTML
            // htmlString = htmlString.replace("contenteditable=\"true\"", "contenteditable=\"false\"")
            htmlString = htmlString.replace(/contenteditable="true"/g, "contenteditable=\"false\"")
            setFileData(htmlString)
            // console.log(htmlString)
            let compressed = lz.encodeBase64(lz.compress(htmlString))
            setToSave({
                templateID: curTemplate,
                templateData: compressed
            })
        }
        setTimeout(function () { setSaveClicked(false); }, 1000);
       
    }, [curTemplate, setToSave, saveClicked, setSaveClicked, setFileData])
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
    return (
        <>
            <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                </div>
                <div className={`${ContainerEditCss.editing} mx-auto overflow-y-auto`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)` } : null}>
                    <div className="getInnerHTML">
                        <section className="filterHTML">
                            {updateChildren.map((ItemX, index) => {
                                return (
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
                                            className="relative">
                                            <ItemX overSection={(overSection && sectionKey === index) ? true : false} showPopup={showPopUp} />
                                            <div className="flex w-52 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "4rem", zIndex: "9999999" } : { display: "none" }}>
                                                <button className="bg-red-500 p-3" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                                <button className="bg-red-500 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                                <button className="bg-red-500 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
                                                <button className="bg-red-500 p-3" onClick={() => {
                                                    setShowPopUp((popup) => !popup);
                                                }}><i className="far fa-images text-white"></i></button>
                                            </div>
                                            {/* <div
                                                className={(overSection && sectionKey === index) ? "absolute border-2 border-red-500 w-full h-full top-0" : "hidden"}
                                                // className="absolute border-2 border-red-500 w-full h-full"
                                            >

                                            </div> */}
                                        </section>
                                    </>
                                )
                            })}
                        </section>
                    </div>
                </div>
            </section>

        </>

    );
}