import React, { useEffect, useState } from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';
import subPages from './TemplateSubPages';
import FileSaver from 'file-saver';

export default function Header({ templateNum, setSaveClicked, toSave, saveClicked, fileData, setTemplateSubPage, setDisplayDevice }) {
    const [isClicked, setIsClicked] = useState(false);
    const onClicked = () => setIsClicked((condition) => !condition);
    const [subPageList, setSubPageList] = useState([]);
    const [newPath, setNewPath] = useState([]);

    useEffect(() => {
        if (templateNum === 1) {
            setNewPath('/preview/template-1')
            setSubPageList(subPages.template1Subpages)
        }
        else if (templateNum === 2) {
            setNewPath('/preview/template-2')
            setSubPageList(subPages.template2Subpages)
        }
        else if (templateNum === 3) {
            setNewPath('/preview/template-3')
            setSubPageList(subPages.template3Subpages)
        }
        else if (templateNum === 4) {
            setNewPath('/preview/template-4')
            setSubPageList(subPages.template4Subpages)
        }
        else if (templateNum === 0) {
            setNewPath('/preview/new-template')
        }

    }, [templateNum])
    // useEffect(() => {
    //     if (saveClicked) {
            
    //     }
    // }, [saveClicked])
    const saveTemplate = () => {
        setSaveClicked(true);
        setTimeout(function () { setSaveClicked(true); }, 3000);
        localStorage.setItem('Template-4', JSON.stringify(toSave))
        console.log(fileData)
    }
    const exportCode = () => {
        console.log("Sending Request")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                file_name: "index.html",
                file_content: fileData
            })
        };
        fetch('/generate-file', requestOptions)
            .then(response => response.text())
            .then((fileText) => {
                let blob = new Blob([fileText], { type: "text/html;charset=utf-8" })
                FileSaver.saveAs(blob, "index.html")
                console.log(fileText, "header check file content")
            })
            .catch(error => console.log(error))
    }

    return (
        <>

            <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-16 bg-black fixed z-50 w-full top-0`}>
                <div className="w-96 ml-4">
                    <div className="list">
                        <div style={{ width: `110px`, cursor: `pointer` }} onClick={onClicked}> {isClicked ? <h2 style={{ background: `red`, padding: `12px 30px`, borderRadius: `5px`, color: "white", fontWeight: "700" }}> Close </h2> : <h2 style={{ padding: `12px 30px`, borderRadius: `5px`, color: `white`, fontWeight: "700", background: `rgb(60,172,254)`}}> Pages </h2>} </div>
                        <div className="w-48" style={isClicked ? { left: `0`, position: `absolute`, top: `100%`, transition: `0.25s all ease`, background: `white`, height: `100vh` } : { position: `absolute`, top: `100%`, left: `-100%`, height: `100vh`, background: `white`, boxShadow: `1px 4px 2px 2px rgba(0,0,0,0.3)`, transition: `0.25s all ease` }}>
                            <div className="flex flex-col mt-12">
                                {subPageList.map((item) => <h5 onClick={() => setTemplateSubPage(item)} style={{ padding: `12px 15px 12px`, borderRadius: `12px`, color: `white`, fontWeight: `600`, cursor: `pointer` }} className="m-6 bg-BL-600">{item}</h5>)}
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
                    <Link to={newPath} target='_blank' rel='noopener noreferrer' className={`${HeaderEditCss.sideButton} flex items-center px-2 py-3 text-white w-28 justify-center rounded-2xl`}>
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
