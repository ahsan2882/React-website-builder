import React, { useEffect, useRef, useState } from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'
import { templateComponents } from '../myComponents/AllTemplates';

export default function ContainerEdit({ templateNum, overlayPresent, saveClicked, setToSave, setSaveClicked }) {
    const htmlRef = useRef(null);
    const [updateChildren, setUpdateChildren] = useState([])
    const [overSection, setOverSection] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false)
    const [sectionKey, setSectionKey] = useState(null);
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            console.log(item)
            let valueString = Object.values(item)[0];
            console.log(valueString)
            let Comp = assetObject[valueString]
            setUpdateChildren([...updateChildren, Comp])
            let inHTML = htmlRef.current;
            console.log(inHTML)
        },
        collect: monitor => ({
            canDrop: !!monitor.canDrop()
        })
    })
    const temp = templateNum;
    useEffect(() => {
        if (temp === 1) {
            setUpdateChildren(templateComponents.template1Components)
        }
        else if (temp === 2) {
            setUpdateChildren(templateComponents.template2Components)
        }
        else if (temp === 3) {
            setUpdateChildren(templateComponents.template3Components)
        }
        else if (temp === 4) {
            setUpdateChildren(templateComponents.template4Components)
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
                    <div className="getInnerHTML" ref={htmlRef}>
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
                                        className={(overSection && sectionKey === index) ? "border-2 border-solid border-red-500 relative" : "border-2 border-solid border-transparent"}>
                                        <ItemX overSection={(overSection && sectionKey === index) ? true : false} showPopup={showPopUp} />
                                        <div className="flex w-52 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "4rem", zIndex: "9999999" } : { display: "none" }}>
                                            <button className="bg-red-500 p-3" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                            <button className="bg-red-500 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                            <button className="bg-red-500 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
                                            <button className="bg-red-500 p-3" onClick={() => {
                                                setShowPopUp((popup) => !popup);
                                            }}><i className="far fa-images text-white"></i></button>
                                        </div>
                                    </section>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>

    );
}