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
    const [editMenu, setEditMenu] = useState(false)
    const [editTemplateMenu, setEditTemplateMenu] = useState("")
    const [saveClicked, setSaveClicked] = useState(null);
    const [linksfunc, setLinksfunc] = useState(false)
    const [fileData, setFileData] = useState({});
    const [chatInclude, setChatInclude] = useState(false);
    const [displayDevice, setDisplayDevice] = useState(true);
    const [fileName, setFileName] = useState("");

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
                    setEditTemplateMenu={setEditTemplateMenu}
                    setEditMenu={setEditMenu}
                    setLinksfunc={setLinksfunc}
                    setDisplayDevice={setDisplayDevice}
                    fileName={fileName}
                />
                <ContainerEdit
                    templatePage={templatePage}
                    templateNum={temp}
                    overlayPresent={assetSelected}
                    saveClicked={saveClicked}
                    editMenu={editMenu}
                    setToSave={setToSave}
                    editTemplateMenu={editTemplateMenu}
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
