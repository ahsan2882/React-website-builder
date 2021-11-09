// import React, { useEffect, useState, useRef } from 'react'
import React, { useEffect, useState } from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import lz from "lzutf8";
import { useDrop } from 'react-dnd'
// import { Editor } from '@tinymce/tinymce-react';
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'
import { templateComponents } from '../myComponents/AllTemplates';
// import nav4edit from '../template4components/nav4edits'
// import Modal from 'react-modal';
// Modal.setAppElement(document.getElementById('editorScreen'));
export default function ContainerEdit({ templateNum, setFileName, editTemplateMenu, editMenu, overlayPresent, linksfunc, saveClicked, setToSave, setSaveClicked, setDisplayDevice, displayDevice, setFileData, templatePage, chatInclude }) {
    const [updateChildren, setUpdateChildren] = useState([])
    const [overSection, setOverSection] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false)
    // const [linksfunc, setLinksfunc] = useState(false)
    const [sectionKey, setSectionKey] = useState(null);
    const [curTemplate, setCurTemplate] = useState(null);
    const [fileName, setfilename] = useState(null);
    // const [modalIsOpen, setIsOpen] = React.useState(false);
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            let valueString = Object.values(item)[0];
            let Comp = assetObject[valueString]
            setUpdateChildren([...updateChildren, Comp])
        },
        collect: monitor => ({
            canDrop: !!monitor.canDrop()
        })
    })
    let readMores = document.getElementsByClassName("readMoreText");
    let inde = 0;
    while (inde < readMores.length) {
        readMores[inde].classList.add("hidden")
        inde++
    }
    console.log(readMores)
    const temp = templateNum;
    useEffect(() => {
        let filename = "";
        if (temp === 1) {
            setUpdateChildren(templateComponents.template1Components.filter((item) => item.pageName === String(templatePage)).map((item) => item.pageSections.map((items) => items))[0])
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 1");
        }
        else if (temp === 2) {
            setUpdateChildren(templateComponents.template2Components.filter((item) => item.pageName === String(templatePage)).map((item) => item.pageSections.map((items) => items))[0])
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                console.log(templatePage)
                filename = String(templatePage).toLowerCase().replace("/", "").replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 2");
        }
        else if (temp === 3) {
            setUpdateChildren(templateComponents.template3Components.filter((item) => item.pageName === String(templatePage)).map((item) => item.pageSections.map((items) => items))[0])
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 3");
        }
        else if (temp === 4) {
            setUpdateChildren(templateComponents.template4Components.filter((item) => item.pageName === String(templatePage)).map((item) => item.pageSections.map((items) => items))[0])
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 4");
        }
        else if (temp === 0) {
            setUpdateChildren([])
        }
    }, [temp, templatePage, setfilename])
    useEffect(() => {

        setDisplayDevice(true)
        let htmlString = getHTMLData()
        let cssString = getCSSData()
        let compressed = lz.encodeBase64(lz.compress(htmlString))
        setToSave({
            filename: fileName,
            templateID: curTemplate,
            templateData: compressed
        })
        setFileData({
            html: `${htmlString}`,
            css: `${cssString}`
        })
        setFileName(fileName)

    }, [curTemplate, setToSave, saveClicked, setSaveClicked, setFileData, setDisplayDevice, fileName, setFileName])
    
    const getHTMLData = () => {

        let newDocString = document.getElementsByClassName("getInnerHTML")[0].innerHTML;
        let newDoc = new DOMParser().parseFromString(newDocString, 'text/html');
        let removed = newDoc.getElementsByClassName("toBeRemoved")
        while (removed.length > 0) {
            removed[0].parentNode.removeChild(removed[0]);
        }
        let editableFalse = newDoc.getElementsByClassName("mce-content-body")
        let i = 0
        while (i < editableFalse.length) {
            editableFalse[i].setAttribute("contenteditable", "false")
            i++
        }
        let vid = document.getElementsByTagName("video")[0]
        if (vid !== undefined) {
            let att = document.createAttribute("muted");
            att.value = "true";
            vid.setAttributeNode(att)
        }
        let htmlString = newDoc.getElementsByClassName("filterHTML")[0].innerHTML
        htmlString = htmlString.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        // setLinksfunc(false);
        // console.log(htmlString)
        // console.log(linksfunc)
        return htmlString;
    }
    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     // subtitle.style.color = '#f00';
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }
    const getCSSData = () => {
        let cssString = ''
        let styleComponent = document.getElementsByTagName("style")
        // console.log(styleComponent.length)
        let i = 0
        while (i < styleComponent.length) {
            cssString += styleComponent[i].innerHTML
            i++
        }
        // for (let style in styleComponent) {
        //     console.log(styleComponent[style], parseInt(style))
        //     // cssString += styleComponent[style].innerHTML
        // }
        return cssString;
    }
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
            <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`} id='editorScreen' style={displayDevice ? { maxWidth: "80vw" } : { maxWidth: "500px" }}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                </div>
                <div className={`${ContainerEditCss.editing} mx-auto overflow-y-auto overflow-x-hidden`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)` } : null}>
                    {/* {editMenu ? <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Edit Navigation Menu Here"
                    >

                    </Modal> : null} */}
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
                                            <ItemX displayDevice={displayDevice} linksfunc={linksfunc} overSection={(overSection && sectionKey === index) ? true : false} showPopup={showPopUp} />
                                            <div className="toBeRemoved" style={displayDevice ? null : { display: "none" }}>
                                                <div className="flex w-52 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "4rem", zIndex: "9999999" } : { display: "none" }}>
                                                    <button className="p-3 bg-BL-600" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => {
                                                        setShowPopUp((popup) => !popup);
                                                    }}><i className="far fa-images text-white"></i></button>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )
                            })
                            }
                            {chatInclude ? <WhatsAppChat /> : null}
                        </section>
                    </div>
                </div>

            </section>

        </>

    );
}



const WhatsAppChat = () => {
    return (
        <>
            <a href="https://wa.me/2348100000000" className="fixed w-16 h-16 text-white text-center text-3xl bg-green-600 flex justify-center items-center rounded-full" style={{ right: "12%", bottom: "10%" }} target="_blank" rel="noopener noreferrer" ><i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </>
    )
}

// const MenuEdit = ({ editTemplateMenu }) => {
//     const editorRef = useRef();
//     // const [menuOpt, setMenuOpt] = useState([])
//     const [showModal, setShowModal] = useState(false)
//     return (
//         <>
//             <section className="bg-gray-300 w-10/12 h-full mx-auto">
//                 <h1>Edit Menu Here</h1>
//                 {nav4edit.map((item) => <div className="w-1/2 flex justify-between items-center border-2 border-black rounded my-6 mx-4 bg-white">
//                     <div>
//                         <Editor
//                             onInit={(evt, editor) => editorRef.current = editor}
//                             inline={true}
//                             key='NavMenu1'
//                             tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
//                             initialValue={`${item}`}
//                             init={{
//                                 forced_root_block: "",
//                                 menubar: false,
//                                 toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
//                                     'alignright alignjustify | fontselect',
//                                 fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
//                                 font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
//                             }}
//                         />
//                     </div>
//                     <div>
//                         <button className="px-1.5 py-1 rounded-full hover:bg-gray-300"><i className="fas fa-link"></i></button>
//                     </div>
//                 </div>)}
//             </section>
//         </>
//     )
// }