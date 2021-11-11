import React, { useEffect, useState } from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';
import pages from './TemplatePages';
import FileSaver from 'file-saver';

export default function Header({ templateNum, fileName, setSaveClicked, setLinksfunc, toSave, setEditMenu, setEditTemplateMenu, saveClicked, fileData, setTemplatePage, setDisplayDevice }) {
    const [isClicked, setIsClicked] = useState(false);
    const onClicked = () => setIsClicked((condition) => !condition);
    const [PageList, setPageList] = useState([]);
    const [subpages, setSubpages] = useState([]);
    const [showSidebar, setShowSidebar] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [newPath, setNewPath] = useState([]);
    const [currentTemp, setCurrentTemp] = useState([]);

    useEffect(() => {
        if (templateNum === 1) {
            setNewPath('/preview/template-1')
            setPageList(pages.template1pages.map((item) => item.groupName))
            setCurrentTemp("Template-1")
        }
        else if (templateNum === 2) {
            setNewPath('/preview/template-2')
            setPageList(pages.template2pages.map((item) => item.groupName))
            setCurrentTemp("Template-2")
        }
        else if (templateNum === 3) {
            setNewPath('/preview/template-3')
            setPageList(pages.template3pages.map((item) => item.groupName))
            setCurrentTemp("Template-3")
        }
        else if (templateNum === 4) {
            setNewPath('/preview/template-4')
            setPageList(pages.template4pages.map((item) => item.groupName))
            setCurrentTemp("Template-4")
        }
        else if (templateNum === 0) {
            setNewPath('/preview/new-template')
            setCurrentTemp("New-Template")
        }

    }, [templateNum])
    // useEffect(() => {
    //     if (saveClicked) {

    //     }
    // }, [saveClicked])
    // useEffect(() => {
    //     if (saveClicked) {
    //         setTimeout(() => {
    //             setLinksfunc(false);
    //             setSaveClicked(false);
    //         }, 5000);
    //     }
    // }, [saveClicked, setSaveClicked, setLinksfunc])
    const saveTemplate = () => {
        setLinksfunc(true);
        setSaveClicked(true);
        localStorage.setItem(currentTemp, JSON.stringify(toSave))
        setTimeout(() => {
            setLinksfunc(false);
            setSaveClicked(false);
        }, 2700);
        // console.log(fileData)
    }
    const exportCode = () => {
        // console.log("Sending Request")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                file_name: fileName,
                file_content: fileData
            })
        };
        fetch('/generate-file', requestOptions)
            .then(response => response.text())
            .then((fileText) => {
                let blob = new Blob([fileText], { type: "text/html;charset=utf-8" })
                FileSaver.saveAs(blob, fileName)
                // console.log(fileText, "header check file content")
            })
            .catch(error => console.log(error))
    }
    const dropdownClicked = (e) => {
        setShowDropdown(states => !states)
        setShowSidebar(e.target.innerHTML)
        if (currentTemp === "Template-1") {
            setSubpages(pages.template1pages.filter((item, i) => item.groupName === e.target.innerHTML).map((item) => item.subpages.map(items => items))[0])
        } else if (currentTemp === "Template-2") {
            setSubpages(pages.template2pages.filter((item, i) => item.groupName === e.target.innerHTML).map((item) => item.subpages.map(items => items))[0])
        } else if (currentTemp === "Template-3") {
            setSubpages(pages.template3pages.filter((item, i) => item.groupName === e.target.innerHTML).map((item) => item.subpages.map(items => items))[0])
        } else if (currentTemp === "Template-4") {
            setSubpages(pages.template4pages.filter((item, i) => item.groupName === e.target.innerHTML).map((item) => item.subpages.map(items => items))[0])
        }
    }

    return (
        <>

            <div className={`flex justify-between items-center py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-16 bg-black fixed z-50 w-full top-0`}>
                <div className="w-96 ml-4">
                    <div className="list">
                        <div style={{ width: `110px`, cursor: `pointer` }} onClick={onClicked}> {isClicked ? <h2 style={{ background: `red`, padding: `12px 30px`, borderRadius: `5px`, color: "white", fontWeight: "700" }}> Close </h2> : <h2 style={{ padding: `12px 30px`, borderRadius: `5px`, color: `white`, fontWeight: "700", background: `rgb(60,172,254)` }}> Pages </h2>} </div>
                        <div className={`${HeaderEditCss.pagebar}`} style={isClicked ? { left: `0`, display: "block" } : { left: `-100%`, display: "none" }}>
                            <div className="flex flex-col mt-12 h-full w-full">
                                {PageList.map((item, i) =>
                                    <div key={i} className="w-full h-4/5">
                                        <button onClick={(e) => dropdownClicked(e)} style={{ width: "100px", padding: "0.7rem 0", borderRadius: `12px`, color: `white`, fontWeight: `600`, cursor: `pointer` }} className=" m-6 bg-BL-600">{item}</button>
                                        <ul className={(showDropdown && showSidebar === item) ? "flex flex-col justify-around items-start w-full" : "hidden"}>
                                            {subpages.map((items, index) => <li className="ml-11 w-full cursor-pointer" key={index} onClick={() => setTemplatePage(items)}>&gt;&nbsp;{items}</li>)}
                                        </ul>
                                    </div>
                                )}
                                <div>
                                    <button className="m-6 bg-BL-600 text-white py-3 px-2 font-semibold rounded-md"
                                        onClick={() => {
                                            setEditMenu((state) => !state)
                                            // setEditTemplateMenu(currentTemp)
                                        }}>Edit Menu</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="relative w-32 flex justify-between">
                        <button className="rounded-full w-20 h-16 text-white" onClick={() => setDisplayDevice(true)}>
                            <i className={`fas fa-desktop text-2xl`}>
                            </i>
                        </button>
                        <button className="rounded-full w-20 h-16 text-white" onClick={() => setDisplayDevice(false)}>
                            <i className="fas fa-mobile-alt text-2xl"></i>
                        </button>
                    </div>
                </nav>
                <div className="flex items-center justify-between w-96">
                    <button className={`flex items-center px-2 py-3 w-28 justify-center pl-6 rounded-2xl text-white ${HeaderEditCss.sideButton}`}
                        onClick={() => {
                            saveTemplate();
                        }}
                    >
                        <h2> SAVE</h2>
                        <i className={saveClicked ? "ml-2 fas fa-check text-green-600" : " ml-2 fas fa-check text-black"}></i>
                    </button>
                    <Link to={`${newPath}`} target='_blank' rel='noopener noreferrer' className={`${HeaderEditCss.sideButton} flex items-center px-2 py-3 text-white w-28 justify-center rounded-2xl`}>
                        {/* <img src={previewIm} alt="Preview" className={`w-9 h-auto`} /> */}
                        <h2>PREVIEW</h2>
                    </Link>
                    <button className={`${HeaderEditCss.sideButton} flex items-center px-2 py-3 text-white w-28 justify-center rounded-2xl`} onClick={() => exportCode()}>
                        <h2>EXPORT</h2>
                    </button>
                </div>
            </div>
        </>
    );
}
