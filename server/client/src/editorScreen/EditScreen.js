import React, { useState } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function EditScreen({ temp }) {
    const [assetSelected, setAssetSelected] = useState(false);
    const [toSave, setToSave] = useState({
        templateID: null,
        templateData: null
    });
    const [templatePage, setTemplatePage] = useState("Home");
    const [saveClicked, setSaveClicked] = useState(null);
    const [linksfunc, setLinksfunc] = useState(false)
    const [fileData, setFileData] = useState({});
    const [chatInclude, setChatInclude] = useState(false);
    const [displayDevice, setDisplayDevice] = useState(true);
    const [fileName, setFileName] = useState("");
    const [nav1Service, setNav1Services] = useState(["STATIC SECURITY", "MOBILE PATROLLING", "CCTV MONITORING", "LOCK & UNLOCK", "VACANT UNIT CHECKS", "TECHNOLOGY PRODUCT", "MANNED GUARDING", "SUPPORT & MANAGEMENT", "EVENT SECURITY"])
    const [nav2Service, setNav2Services] = useState(["STATIC SECURITY", "MOBILE PATROLLING", "CCTV MONITORING", "LOCK & UNLOCK", "VACANT UNIT CHECKS", "TECHNOLOGY PRODUCT", "MANNED GUARDING", "SUPPORT & MANAGEMENT", "EVENT SECURITY", "GUARD HOUSE", "24/7 SURVEILLANCE"])
    const [nav2Sector, setNav2Sector] = useState(["CONSTRUCTION", "CORPORATE", "INDUSTRIAL", "RETAIL", "LOGISTICS", "PROPERTY MANAGEMENT"])

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <HeaderEdit
                    setTemplatePage={setTemplatePage}
                    templateNum={temp}
                    setSaveClicked={setSaveClicked}
                    saveClicked={saveClicked}
                    toSave={toSave}
                    fileData={fileData}
                    nav1Service={nav1Service}
                    nav2Service={nav2Service}
                    nav2Sector={nav2Sector}
                    setLinksfunc={setLinksfunc}
                    setDisplayDevice={setDisplayDevice}
                    fileName={fileName}
                />
                <ContainerEdit
                    templatePage={templatePage}
                    templateNum={temp}
                    overlayPresent={assetSelected}
                    saveClicked={saveClicked}
                    setToSave={setToSave}
                    nav1Service={nav1Service}
                    setNav1Services={setNav1Services}
                    nav2Service={nav2Service}
                    setNav2Services={setNav2Services}
                    nav2Sector={nav2Sector}
                    setNav2Sector={setNav2Sector}
                    setSaveClicked={setSaveClicked}
                    chatInclude={chatInclude}
                    setLinksfunc={setLinksfunc}
                    linksfunc={linksfunc}
                    setDisplayDevice={setDisplayDevice}
                    displayDevice={displayDevice}
                    setFileData={setFileData}
                    setFileName={setFileName}
                />
                <FooterEdit
                    setOverlay={setAssetSelected}
                    setChatInclude={setChatInclude}
                    chatInclude={chatInclude}
                />
            </DndProvider>
        </>
    )
}
